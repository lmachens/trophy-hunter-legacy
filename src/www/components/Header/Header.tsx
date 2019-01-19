import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';
import React from 'react';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#0a0a0c',
    textAlign: 'center',
    borderBottom: `1px solid #31271e`
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Link href="/">
        <Button>Home</Button>
      </Link>
      <Link href="/about">
        <Button>About</Button>
      </Link>
    </header>
  );
};

export default Header;
