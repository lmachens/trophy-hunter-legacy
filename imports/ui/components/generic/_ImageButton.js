import ButtonBase from '@material-ui/core/ButtonBase';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { withStyles } from './_Styles';

const styles = theme => ({
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
    '&:hover': {
      opacity: 0.1
    }
  },
  grayscale: {
    filter: 'brightness(.7) grayscale(100%)',
    transition: theme.transitions.create('filter'),
    '&:hover': {
      filter: 'none'
    }
  }
});

const ImageButton = ({ classes, className, grayscale, src, imgProps, ...other }) => (
  <ButtonBase
    focusRipple
    {...other}
    className={classNames(className, { [classes.grayscale]: grayscale })}
  >
    <span className={classes.imageBackdrop} />
    <img src={src} {...imgProps} />
  </ButtonBase>
);

ImageButton.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  imgProps: PropTypes.object,
  grayscale: PropTypes.bool
};

const enhanced = withStyles(styles)(ImageButton);
export { enhanced as ImageButton };
