import { Typography } from '@material-ui/core';
import React from 'react';

const Match = ({ match, summonerName }) => {
  console.log('Match', match);
  return <Typography>{summonerName}</Typography>;
};

export default Match;
