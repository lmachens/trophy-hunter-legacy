import { ThemeProvider } from '@material-ui/styles';
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
      <ThemeProvider theme={theme}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}
