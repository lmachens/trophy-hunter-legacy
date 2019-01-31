import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Features from '../Features';
import Header from '../Header';
import Home from '../Home';
import Screenshots from '../Screenshots/Screenshots';

const useStyles = makeStyles({
  container: {
    marginBottom: 100
  }
});

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <Home />
      <Features />
      <Screenshots />
    </div>
  );
};

export default Landing;
