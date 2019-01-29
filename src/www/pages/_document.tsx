import { StylesProvider } from '@material-ui/styles';
import { SheetsRegistry } from 'jss';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class JssDocument extends Document<{ registry: any }> {
  static getInitialProps(ctx) {
    const registry = new SheetsRegistry();
    const sheetsManager = new Map();

    const page = ctx.renderPage(App => props => (
      <StylesProvider sheetsManager={sheetsManager} sheetsRegistry={registry}>
        <App {...props} />
      </StylesProvider>
    ));

    return {
      ...page,
      registry
    };
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="description" content="Earn Trophies for playing League of Legends!" />
          <meta property="og:description" content="Earn Trophies for playing League of Legends!" />
          <meta
            name="keywords"
            content="League of Legends, LoL App, LoL Guide, Real-time In Game, Statistics, LoL Spectate, Overwolf, Champion Guide, Champion Build, LOLKing, Champion Counter"
          />
          <title>Trophy Hunter</title>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                html {
                  scroll-behavior: smooth;
                }

                html,
                body,
                #__next {
                  height: 100%;
                  margin: 0;
                }
                body {
                  background: #0a0a0c;
                }
              `
            }}
          />
          <style
            id="server-side-styles"
            dangerouslySetInnerHTML={{ __html: this.props.registry.toString() }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default JssDocument;
