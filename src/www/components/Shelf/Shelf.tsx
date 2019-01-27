import { Button, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { getPlatformIdByRegion, getTrophies } from '../../shared/th-api';
import Trophy from '../Trophy';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    display: 'flex'
  },
  image: {
    height: 211,
    width: 200
  },
  content: {
    padding: 10
  }
});

const sendMessageToGameSummary = (message, extra = '') => {
  console.info('Send message to GameSummary', message, extra);
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
      if (/*origin === 'https://content.overwolf.com' && */ isGameSummaryMessage) {
        if (message === 'newParameters') {
          const { region, matchId, summonerName } = extra;
          const platformId = getPlatformIdByRegion(region);
          lastMatchId = matchId;
          setLoading(true);
          getTrophies({
            platformId,
            matchId,
            summonerName
          }).then(result => {
            if (matchId === lastMatchId) {
              const trophies = result.data.sort((a, b) => b.score - a.score);
              setTrophies(trophies);
              setLoading(false);
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
      <img src="/static/logo_small.png" className={classes.image} />
      <div className={classes.content}>
        {loading && <CircularProgress />}
        {!loading && (
          <>
            <Typography>You obtained {trophies.length} trophies!</Typography>
            {trophies.map(trophy => (
              <Trophy {...trophy} key={trophy.name} />
            ))}
            <Button onClick={handleStoreClick}>
              Become a Trophy Hunter and track your progress
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Shelf;
