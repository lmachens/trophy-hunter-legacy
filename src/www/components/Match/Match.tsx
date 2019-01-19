import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  container: {
    textAlign: 'center'
  }
});

const Match = ({ match, summonerName }) => {
  const classes = useStyles();

  const { win } = match.participant.stats;
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
