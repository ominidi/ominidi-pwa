import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Meta from '../templates/meta/Meta';
import data from '../data/common.yml';

async function getSeo(pathname) {
  const { SEO } = data;
  return SEO[pathname] || SEO['/index'];
}

class MyApp extends App {
  render() {
    const {
      Component,
      pageProps,
      SEO
    } = this.props;

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

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const SEO = await getSeo(ctx.pathname);

  return { pageProps, SEO };
};

export default MyApp;
