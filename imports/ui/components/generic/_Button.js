import MUI_FlatButton from '@material-ui/core/Button';
import MUI_IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';

export { default as RaisedButton } from '@material-ui/core/Button';

export const Button = ({ label, onClick, primary = true, ...others }) => (
  <MUI_FlatButton label={label} onClick={onClick} primary={primary} {...others} />
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool
};

export const IconButton = MUI_IconButton;
export { default as FloatingActionButton } from '@material-ui/core/Button';

export { default as IconButtonV2 } from '@material-ui/core/IconButton';
