import universeTheme, { theme } from './universeTheme';

import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import SimpleSchema from 'simpl-schema';
import V0MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import getMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Extend the schema options allowed by SimpleSchema
SimpleSchema.extendOptions([
  'index', // one of Number, String, Boolean
  'unique', // Boolean
  'sparse' // Boolean
]);

const styles = {
  app: {
    color: universeTheme.palette.textColor,
    backgroundColor: '#0a0a0c',
    userSelect: 'none',
    fontSize: universeTheme.fontSize,
    overflow: 'hidden',
    padding: 8,
    height: '100vh'
  }
};

const StorybookLayout = ({ children }) => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <V0MuiThemeProvider muiTheme={getMuiTheme(universeTheme)}>
        <div style={styles.app}>{children}</div>
      </V0MuiThemeProvider>
    </MuiThemeProvider>
  </BrowserRouter>
);

StorybookLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default StorybookLayout;