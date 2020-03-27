import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Meta from '../templates/meta/Meta';
import getSeo from '../utils/seo';

class MyApp extends App {
  render() {
    const {
      Component,
      pageProps,
      router,
    } = this.props;

    const SEO = getSeo(router.pathname);

    return (
      <>
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
      </>
    );
  }
}

export default MyApp;
