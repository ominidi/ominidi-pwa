import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Meta = ({
  title,
  description,
  url,
  image,
}) => (
  <Head>
    <title key="title">
      {title}
    </title>
    <meta
      name="description"
      content={description}
      key="description"
    />
    <meta
      property="og:title"
      content={title}
      key="og:title"
    />
    <meta
      property="og:description"
      content={description}
      key="og:description"
    />
    <meta
      property="og:url"
      content={url}
      key="og:url"
    />
    <meta
      property="og:image"
      content={image}
      key="og:image"
    />
  </Head>
);

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Meta;
