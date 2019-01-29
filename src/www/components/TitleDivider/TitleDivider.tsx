import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  divider: {
    width: 200,
    maxWidth: '100%',
    margin: '20px auto',
    borderTop: '2px solid',
    color: theme.palette.secondary.main
  }
}));

const TitleDivider = () => {
  const classes = useStyles();

  return <Divider className={classes.divider} />;
};

export default TitleDivider;
