import { Button, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import champions from '../../shared/riot-api/champions';
import { getPlatformIdByRegion, getTrophies } from '../../shared/th-api';
import Trophy from '../Trophy';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    height: '100%',
    overflow: 'hidden'
  },
  background: {
    position: 'absolute',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: -1,
    backgroundImage: `url(/static/bg.jpg)`,
    filter: 'brightness(.5) grayscale(100%)',
    opacity: 0.5
  },
  image: {
    height: 211,
    width: 200,
    margin: 5
  },
  content: {
    padding: 10,
    margin: '36px auto'
  },
  store: {
    position: 'absolute',
    bottom: 5,
    right: 5
  }
});

const sendMessageToGameSummary = (message, extra = '') => {
  if (parent) {
    parent.postMessage({ isOverwolfShelf: true, message, extra }, '*');
  }
};

const handleStoreClick = () => {
  sendMessageToGameSummary('openStorePage');
};

const Shelf = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [trophies, setTrophies] = useState([]);

  useEffect(() => {
    sendMessageToGameSummary('loaded');
    let lastMatchId = null;
    const handleMessage = event => {
      const {
        origin,
        data: { isGameSummaryMessage, message, extra }
      } = event;
      if (origin === 'https://content.overwolf.com' && isGameSummaryMessage) {
        if (message === 'newParameters') {
          const { region, matchId, summonerName, champion: championName } = extra.params;

          // Workaround until "summonerName" exists
          const champion: any = Object.values(champions).find(
            (champion: any) => champion.name === championName
          );
          const championId = champion.id;

          const platformId = getPlatformIdByRegion(region);
          lastMatchId = matchId;
          setLoading(true);
          getTrophies({
            platformId,
            matchId,
            summonerName,
            championId
          }).then(result => {
            if (matchId === lastMatchId) {
              const trophies = result.data.sort((a, b) => b.score - a.score);
              setTrophies(trophies);
              setLoading(false);
              sendMessageToGameSummary('ready');
            }
          });
        }
      }
    };
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
      lastMatchId = null;
    };
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.background} />
      <img src="/static/logo_small.png" className={classes.image} />
      <div className={classes.content}>
        {loading && (
          <>
            <CircularProgress />
            <Typography>Checking trophies...</Typography>
          </>
        )}
        {!loading && (
          <>
            <Typography>You obtained {trophies.length} trophies!</Typography>
            {trophies.map(trophy => (
              <Trophy {...trophy} key={trophy.name} />
            ))}
          </>
        )}
      </div>
      <Button className={classes.store} onClick={handleStoreClick}>
        Install Trophy Hunter
      </Button>
    </div>
  );
};

export default Shelf;
