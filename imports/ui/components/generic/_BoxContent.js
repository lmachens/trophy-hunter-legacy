import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from './_Styles';

const styles = {
  paper: {
    position: 'relative',
    height: '100%',
    overflow: 'auto',
    margin: 1
  }
};

const BoxContent = ({ children, classes, ...other }) => (
  <div className={classes.paper} elevation={0} {...other}>
    {children}
  </div>
);

BoxContent.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

const enhanced = withStyles(styles)(BoxContent);

export { enhanced as BoxContent };
