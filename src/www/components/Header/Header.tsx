import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: '#ddd',
    textAlign: 'center',
    borderBottom: `1px solid white`
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Button>Home</Button>
    </header>
  );
};

export default Header;
