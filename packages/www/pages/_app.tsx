import { ThemeProvider } from '@material-ui/styles';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import React from 'react';
import { track } from 'utilities/matomo';
import theme from './_theme';

NProgress.configure({ parent: '#__next', showSpinner: false });
if (typeof window !== 'undefined') {
  track({
    url: location.href,
    action_name: location.pathname.substr(1) || 'home'
  });
}

Router.events.on('routeChangeStart', (url: string) => {
  NProgress.start();
  track({
    url: `${window.origin}${url}`,
    action_name: url.substr(1).split('?')[0] || 'home'
  });
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
          <Head>
            <title>Trophy Hunter</title>
          </Head>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}
