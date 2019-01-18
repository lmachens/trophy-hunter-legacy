import { MuiThemeProvider } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import Header from '../components/Header';
import theme from './theme';

const PageLayout: FunctionComponent = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <Header />
    <main>{children}</main>
  </MuiThemeProvider>
);

export default PageLayout;
