import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => (
  <header className="section__header">
    {children}
  </header>
);

const Title = ({ children }) => (
  <h2 className="section__title title-2">
    {children}
  </h2>
);

const Content = ({ children }) => (
  <div className="section__content">
    {children}
  </div>
);

const Section = ({ children }) => (
  <section className="section">
    {children}
  </section>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

Section.Header = Header;
Section.Title = Title;
Section.Content = Content;

export default Section;
