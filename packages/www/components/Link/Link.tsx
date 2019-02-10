import { Link as MuiLink } from '@material-ui/core';
import NextLink from 'next/link';
import React from 'react';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  link: {
    cursor: 'pointer'
  }
});

const Link = ({ children, href, ...other }) => {
  const classes = useStyles();

  return (
    <MuiLink className={classes.link} {...other}>
      <NextLink href={href}>{children}</NextLink>
    </MuiLink>
  );
};

export default Link;
