import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="it">
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#181818" />

          <link rel="manifest" href="/static/manifest.json" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/assets/img/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <main id="main" className="main">
            <Main />
          </main>
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
