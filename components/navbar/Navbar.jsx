import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ menuItems }) => (
  <nav className="navbar">
    <ul className="navbar__menu">
      {
        menuItems.map(item => (
          <li
            className="navbar__menu__item"
            key={item.href}
          >
            <a
              href={item.href}
              title={item.title}
              className="navbar__menu__link to-manifest"
            >
              {item.text}
            </a>
          </li>
        ))
      }
    </ul>
  </nav>
);

Navbar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
};

Navbar.defaultProps = {
  menuItems: [],
};

export default Navbar;
