import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from './_Typography';
import { withStyles } from './_Styles';

const styles = {
  title: {
    position: 'relative'
  }
};

const BoxTitle = ({ classes, children, ...other }) => (
  <Typography align="center" className={classes.title} gutterBottom variant="caption" {...other}>
    {children}
  </Typography>
);

BoxTitle.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

const enhanced = withStyles(styles)(BoxTitle);

export { enhanced as BoxTitle };
