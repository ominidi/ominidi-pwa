import React from 'react';
import PropTypes from 'prop-types';

const SectionTemplate = ({ title, children }) => (
  <section className="section-template">
    <header className="section__header">
      <h2 className="section__title title-2">
        {title}
      </h2>
    </header>

    <div className="section__content">
      {children}
    </div>
  </section>
);

SectionTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionTemplate;
