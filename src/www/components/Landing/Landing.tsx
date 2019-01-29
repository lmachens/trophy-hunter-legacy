import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Community from '../Community';
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
      <Community />
      <Screenshots />
      <Features />
    </div>
  );
};

export default Landing;
