import { Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  header: {
    position: 'fixed',
    width: '100%',
    zIndex: 1,
    backgroundColor: '#0a0a0c',
    textAlign: 'center',
    borderBottom: `1px solid #31271e`
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Link href="#home">
        <Button>Home</Button>
      </Link>
      <Link href="#features">
        <Button>Features</Button>
      </Link>
      <Link href="#screenshots">
        <Button>Screenshots</Button>
      </Link>
    </header>
  );
};

export default Header;
