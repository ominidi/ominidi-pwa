import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../templates/footer/Footer';
import Header from '../../templates/header/Header';

const Site = ({ children }) => (
  <div className="site-layout">
    <Header />

    <div className="site-layout__content">
      {children}
    </div>

    <Footer />
  </div>
);

Site.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Site;
