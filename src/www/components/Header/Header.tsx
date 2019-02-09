import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  header: {
    height: 36,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 2,
    backgroundColor: '#0a0a0c',
    textAlign: 'center',
    borderBottom: `1px solid #31271e`
  }
});

const Header = ({ children }) => {
  const classes = useStyles();
  return <header className={classes.header}>{children}</header>;
};

export default Header;
