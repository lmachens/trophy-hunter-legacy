import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { withStyles } from './_Styles';

const styles = {
  background: {
    position: 'absolute',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  }
};

const BoxBackground = ({ classes, className, imageUrl, useFilter = true }) => (
  <div
    className={classNames(classes.background, className)}
    style={{
      backgroundImage: `url(${imageUrl})`,
      filter: useFilter ? 'brightness(.5) grayscale(100%)' : 'none',
      opacity: useFilter ? '.5' : 1
    }}
  />
);

BoxBackground.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  useFilter: PropTypes.bool
};

const enhanced = withStyles(styles)(BoxBackground);

export { enhanced as BoxBackground };
