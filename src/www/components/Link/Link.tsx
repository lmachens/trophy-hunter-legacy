import { Link as MuiLink } from '@material-ui/core';
import NextLink from 'next/link';
import React from 'react';

const Link = ({ children, href, ...other }) => {
  return (
    <MuiLink {...other}>
      <NextLink href={href}>{children}</NextLink>
    </MuiLink>
  );
};

export default Link;
