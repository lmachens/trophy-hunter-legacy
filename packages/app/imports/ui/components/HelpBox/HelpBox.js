import { HelpIcon } from '../icons';
import PropTypes from 'prop-types';
import React from 'react';
import universeTheme from '../../layouts/universeTheme';

const HelpBox = ({ children, style }) => {
  const defaultStyle = {
    display: 'flex',
    padding: 10,
    margin: '0 auto',
    backgroundColor: universeTheme.palette.canvasColor,
    border: `1px solid ${universeTheme.palette.borderColor}`,
    maxWidth: 500,
    textAlign: 'center'
  };

  return (
    <div style={{ padding: '10px 0' }}>
      <div style={Object.assign({}, defaultStyle, style)}>
        <HelpIcon />
        <div style={{ flex: 1, marginLeft: 5 }}>{children}</div>
      </div>
    </div>
  );
};

HelpBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.object
};

export default HelpBox;
