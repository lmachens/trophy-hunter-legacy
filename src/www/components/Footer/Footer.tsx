import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Link from '../Link';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#010101'
  },
  text: {
    maxWidth: 1000,
    textAlign: 'left',
    margin: '0 auto',
    display: 'flex',
    padding: 16
  },
  grow: {
    flex: 1
  },
  limiter: {
    marginLeft: 10,
    marginRight: 10
  }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.container} id="about">
      <div className={classes.text}>
        <Typography>Copyright © 2019 Leon Machens</Typography>
        <div className={classes.grow} />
        <Link href="/">
          <Typography>Home</Typography>
        </Link>
        <Typography className={classes.limiter}>|</Typography>
        <Link href="/legal">
          <Typography>Legal Notice</Typography>
        </Link>
        <Typography className={classes.limiter}>|</Typography>
        <Link href="/privacy">
          <Typography>Cookie Policy</Typography>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
