import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  container: {
    textAlign: 'center'
  },
  image: {
    width: '100%',
    maxWidth: 1000
  }
});

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src="/static/logo.png" className={classes.image} />
      <Typography>Under construction</Typography>
    </div>
  );
};

export default Landing;
