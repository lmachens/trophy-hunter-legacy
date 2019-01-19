import { install, ThemeProvider } from '@material-ui/styles';
// https://material-ui.com/css-in-js/basics/#migration-for-material-ui-core-users
install();

import App, { Container } from 'next/app';
import React from 'react';
import theme from './_theme';

export default class MyApp extends App<any> {
  componentDidMount() {
    const style = document.getElementById('server-side-styles');

    if (style) {
      style.parentNode.removeChild(style);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
