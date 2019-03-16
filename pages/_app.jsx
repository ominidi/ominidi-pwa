import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Meta from '../templates/meta/Meta';
import data from '../data/common.yml';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const SEO = await MyApp.getSeo(ctx.pathname);

    return { pageProps, SEO };
  }

  static async getSeo(pathname) {
    const { SEO } = data;
    return SEO[pathname] || SEO['/index'];
  }

  render() {
    const { Component, pageProps, SEO } = this.props;

    return (
      <Container>
        <Head>
          <title>
            {SEO.title}
          </title>
          <Meta
            title={SEO.title}
            description={SEO.description}
            ogUrl={SEO.ogUrl}
            ogImage={SEO.ogImage}
          />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
