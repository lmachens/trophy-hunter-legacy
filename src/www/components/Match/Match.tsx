import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import extendMatchResult from '../../shared/matches/extendMatchResult';
import calculateTrophies from '../../shared/trophies/calculateTrophies';

const useStyles = makeStyles({
  container: {
    textAlign: 'center'
  }
});

const Match = ({ match, summonerName }) => {
  const classes = useStyles();

  useEffect(() => {
    const extendedMatch = extendMatchResult({
      matchResult: match,
      summonerName
    });
    const trophies = calculateTrophies({ extendedMatchResult: extendedMatch });
  });

  // const { win } = match.participant.stats;
  const win = true;
  return (
    <div className={classes.container}>
      <Typography variant="h2">
        <span>
          {summonerName}{' '}
          <span style={{ color: win ? 'green' : '#9C172A' }}>{win ? 'won' : 'lost'}!</span>
        </span>
      </Typography>
    </div>
  );
};

export default Match;
