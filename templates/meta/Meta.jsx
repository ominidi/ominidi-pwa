import React from 'react';
import PropTypes from 'prop-types';

const Meta = ({
  title,
  description,
  ogUrl,
  ogImage,
}) => (
  <React.Fragment>
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
      content={ogUrl}
      key="og:url"
    />
    <meta
      property="og:image"
      content={ogImage}
      key="og:image"
    />
    <meta
      property="og:type"
      content="website"
    />
    <meta
      property="og:locale"
      content="it_IT"
    />
    <meta
      property="og:site_name"
      content="Ominidi.org"
    />
  </React.Fragment>
);

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ogUrl: PropTypes.string.isRequired,
  ogImage: PropTypes.string.isRequired,
};

export default Meta;
