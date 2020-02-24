import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { withStyles } from './_Styles';

const styles = theme => ({
  paper: {
    position: 'relative',
    border: '1px solid rgb(147, 115, 65)',
    backgroundColor: 'rgb(17, 19, 24)',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  clickable: {
    cursor: 'pointer',
    transition: theme.transitions.create('border'),
    '&:hover': {
      border: `1px solid #c4b998`
    }
  }
});

const Box = ({ children, classes, className, onClick, ...other }) => (
  <Paper
    className={classNames(classes.paper, className, { [classes.clickable]: !!onClick })}
    elevation={0}
    onClick={onClick}
    square
    {...other}
  >
    {children}
  </Paper>
);

Box.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

const enhanced = withStyles(styles)(Box);

export { enhanced as Box };
