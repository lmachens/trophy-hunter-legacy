import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

interface TitleDividerProps {
  className?: string;
}

const useStyles = makeStyles(theme => ({
  divider: {
    width: 200,
    maxWidth: '100%',
    margin: '20px auto',
    borderTop: '2px solid',
    color: theme.palette.secondary.main
  }
}));

const TitleDivider: FunctionComponent<TitleDividerProps> = ({ className }) => {
  const classes = useStyles();

  return <Divider className={classNames(classes.divider, className)} />;
};

export default TitleDivider;
