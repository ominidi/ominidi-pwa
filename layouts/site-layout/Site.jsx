import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../templates/footer/Footer';

const Site = ({ children }) => (
  <div className="site-layout">
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
