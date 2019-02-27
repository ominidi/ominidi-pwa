import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../templates/footer/Footer';

const Layout = ({ children }) => (
  <div className="layout">
    <div className="layout__content">
      {children}
    </div>

    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
