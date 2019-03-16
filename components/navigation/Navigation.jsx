import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ navItems }) => (
  <nav className="navigation">
    <ul className="navigation__menu">
      {
        navItems.map(item => (
          <li
            className="navigation__item"
            key={item.href}
          >
            <a
              href={item.href}
              title={item.title}
              className={`navigation__link ${item.icon}`}
            >
              {item.text}
            </a>
          </li>
        ))
      }
    </ul>
  </nav>
);

Navigation.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
};

Navigation.defaultProps = {
  navItems: [],
};

export default Navigation;
