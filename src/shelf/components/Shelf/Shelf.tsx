import { Button, CircularProgress, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import champions from '../../shared/riot-api/champions';
import { getPlatformIdByRegion, getTrophies } from '../../shared/th-api';
import SCORES, { defs } from '../../shared/trophies/scores';
import CountUp from '../CountUp';
import Trophy from '../Trophy';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    userSelect: 'none'
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
    height: 200,
    width: 200,
    margin: 5,
    pointerEvents: 'none'
  },
  content: {
    padding: 10,
    margin: '40px 50px 50px 0px',
    width: '100%'
  },
  store: {
    position: 'absolute',
    bottom: 5,
    right: 5
  },
  score: {},
  community: {
    position: 'absolute',
    top: 12,
    right: 5,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  communityImage: {
    height: 32
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

const DEFAULT_TROPHIES = {
  [SCORES.EPIC]: [],
  [SCORES.VERY_HARD]: [],
  [SCORES.HARD]: [],
  [SCORES.MEDIUM]: [],
  [SCORES.EASY]: []
};

const Shelf = () => {
  const classes = useStyles();
  const [trophiesByScore, setTrophiesByScore] = useState(DEFAULT_TROPHIES);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
          const { region, matchId, summonerName, champion: championName } = extra.params;

          // Workaround until "summonerName" exists
          const champion: any = Object.values(champions).find(
            (champion: any) => champion.name === championName
          );
          const championId = champion.id;

          setLoading(true);
          setError(false);
          const platformId = getPlatformIdByRegion(region);
          lastMatchId = matchId;
          getTrophies({
            platformId,
            matchId,
            summonerName,
            championId
          })
            .then(result => {
              if (matchId === lastMatchId) {
                const trophiesByScore = result.data.reduce(
                  (trophiesByScore, trophy) => {
                    trophiesByScore[trophy.score].push(trophy);
                    return trophiesByScore;
                  },
                  {
                    [SCORES.EPIC]: [],
                    [SCORES.VERY_HARD]: [],
                    [SCORES.HARD]: [],
                    [SCORES.MEDIUM]: [],
                    [SCORES.EASY]: []
                  }
                );

                setTrophiesByScore(trophiesByScore);
                const score = result.data.reduce((score, trophy) => {
                  return score + trophy.score;
                }, 0);
                setScore(score);
                setLoading(false);
                sendMessageToGameSummary('ready');
              }
            })
            .catch(() => {
              setError(true);
              sendMessageToGameSummary('ready');
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
        {error && (
          <>
            <Typography variant="h4" color="primary">
              Error
            </Typography>
            <Typography>Can not find match</Typography>
          </>
        )}
        {loading && <CircularProgress />}
        {!loading && (
          <div className={classes.score}>
            <CountUp end={score} />
            <Typography inline> Points</Typography>
          </div>
        )}
        {trophiesByScore[SCORES.EPIC].map(trophy => (
          <Trophy {...trophy} key={trophy.name} />
        ))}

        {trophiesByScore[SCORES.VERY_HARD].map(trophy => (
          <Trophy {...trophy} key={trophy.name} />
        ))}

        {trophiesByScore[SCORES.HARD].map(trophy => (
          <Trophy {...trophy} key={trophy.name} />
        ))}

        {trophiesByScore[SCORES.MEDIUM].map(trophy => (
          <Trophy {...trophy} key={trophy.name} />
        ))}

        {trophiesByScore[SCORES.EASY].map(trophy => (
          <Trophy {...trophy} key={trophy.name} />
        ))}
      </div>
      <Button
        variant="outlined"
        color="primary"
        className={classes.store}
        onClick={handleStoreClick}
      >
        Download App
      </Button>
      <div className={classes.community}>
        <Link href="https://github.com/lmachens/trophy-hunter" target="_blank">
          <img src="/static/github.png" className={classes.communityImage} />
          <Typography>GitHub</Typography>
        </Link>

        <Link href="https://discord.gg/6aYTkbA" target="_blank">
          <img src="/static/discord.png" className={classes.communityImage} />
          <Typography>Discord</Typography>
        </Link>

        <Link href="https://twitter.com/LolTrophyHunter" target="_blank">
          <img src="/static/twitter.png" className={classes.communityImage} />
          <Typography>Twitter</Typography>
        </Link>
      </div>
    </div>
  );
};

export default Shelf;
