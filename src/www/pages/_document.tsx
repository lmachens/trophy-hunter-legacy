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
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
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
