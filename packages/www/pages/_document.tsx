import { createGenerateClassName, StylesProvider } from '@material-ui/styles';
import { SheetsRegistry } from 'jss';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class JssDocument extends Document<{ registry: any }> {
  static getInitialProps(ctx) {
    const registry = new SheetsRegistry();
    const sheetsManager = new Map();
    const generateClassName = createGenerateClassName();

    const page = ctx.renderPage(App => props => (
      <StylesProvider
        sheetsManager={sheetsManager}
        sheetsRegistry={registry}
        generateClassName={generateClassName}
      >
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
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
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
                  color: #fff;
                }

                #__next {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                }
                
                /* roboto-300 - latin */
                @font-face {
                  font-family: 'Roboto';
                  font-style: normal;
                  font-weight: 300;
                  src: local('Roboto Light'), local('Roboto-Light'),
                      url('/static/fonts/roboto-v18-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
                      url('/static/fonts/roboto-v18-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                /* roboto-regular - latin */
                @font-face {
                  font-family: 'Roboto';
                  font-style: normal;
                  font-weight: 400;
                  src: local('Roboto'), local('Roboto-Regular'),
                      url('/static/fonts/roboto-v18-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
                      url('/static/fonts/roboto-v18-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                /* roboto-500 - latin */
                @font-face {
                  font-family: 'Roboto';
                  font-style: normal;
                  font-weight: 500;
                  src: local('Roboto Medium'), local('Roboto-Medium'),
                      url('/static/fonts/roboto-v18-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
                      url('/static/fonts/roboto-v18-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
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
