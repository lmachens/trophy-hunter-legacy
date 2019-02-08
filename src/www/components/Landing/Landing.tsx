import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';
import Features from '../Features';
import Header from '../Header';
import Home from '../Home';
import Link from '../Link';
import Screenshots from '../Screenshots/Screenshots';
import TitleDivider from '../TitleDivider';
import Trees from '../Trees';

const useStyles = makeStyles({
  container: {
    textAlign: 'center'
  },
  section: {
    textAlign: 'center',
    margin: '0 auto',
    paddingTop: 40,
    paddingBottom: 40
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
        <Link href="#trees">
          <Button>Monthly Trees</Button>
        </Link>
        <Link href="#screenshots">
          <Button>Screenshots</Button>
        </Link>
      </Header>
      <Home />
      <Features />
      <section className={classNames(classes.section)} id="trees">
        <Typography variant="h3" color="default">
          Monthly Trees
        </Typography>
        <TitleDivider />
        <Trees />
      </section>
      <section className={classes.section} id="screenshots">
        <Typography variant="h3" color="default">
          Screenshots
        </Typography>
        <TitleDivider />
        <Screenshots />
      </section>
    </div>
  );
};

export default Landing;
