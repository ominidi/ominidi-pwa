import React from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

export const Navigation = ({
  router,
  navItems,
}) => (
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
              className={`navigation__link ${item.className} ${router.pathname === item.href ? 'is-active' : ''}`}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: item.icon,
              }}
            />
          </li>
        ))
      }
    </ul>
  </nav>
);

Navigation.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
      icon: PropTypes.node,
    }),
  ),
};

Navigation.defaultProps = {
  navItems: [],
};

export default withRouter(Navigation);
