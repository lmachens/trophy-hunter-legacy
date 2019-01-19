import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import extendMatchResult from '../../shared/matches/extendMatchResult';
import calculateTrophies from '../../shared/trophies/calculateTrophies';

const useStyles = makeStyles({
  container: {
    textAlign: 'center'
  }
});

const Match = ({ match, summonerName }) => {
  const classes = useStyles();
  const [extendedMatch, setExtendedMatch] = useState<any>(null);
  const [trophies, setTrophies] = useState([]);

  useEffect(
    () => {
      const extendedMatchResult = extendMatchResult({
        matchResult: match,
        summonerName
      });
      console.log(extendedMatchResult);
      setExtendedMatch(extendedMatchResult);
      const calculatedTrophies = calculateTrophies({ extendedMatchResult });
      setTrophies(calculatedTrophies);
    },
    [match, summonerName]
  );

  if (!extendedMatch) {
    return null;
  }
  const { win } = extendedMatch.participant.stats;
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        <span>
          {summonerName}{' '}
          <span style={{ color: win ? 'green' : '#9C172A' }}>{win ? 'won' : 'lost'}!</span>
        </span>
      </Typography>
    </div>
  );
};

export default Match;
