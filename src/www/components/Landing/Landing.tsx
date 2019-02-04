import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Features from '../Features';
import Header from '../Header';
import Home from '../Home';
import Link from '../Link';
import Screenshots from '../Screenshots/Screenshots';

const useStyles = makeStyles({
  container: {
    textAlign: 'center'
  }
});

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header>
        <Link href="/">
          <Button>Home</Button>
        </Link>
        <Link href="#features">
          <Button>Features</Button>
        </Link>
        <Link href="#screenshots">
          <Button>Screenshots</Button>
        </Link>
      </Header>
      <Home />
      <Features />
      <Screenshots />
    </div>
  );
};

export default Landing;
