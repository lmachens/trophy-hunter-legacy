import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
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
      <Button>Home</Button>
    </header>
  );
};

export default Header;
