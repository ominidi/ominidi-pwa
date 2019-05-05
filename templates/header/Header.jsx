import React from 'react';
import { navItems } from '../../data/common.yml';
import Navigation from '../../components/navigation/Navigation';

const Header = () => (
  <header className="masthead">
    <h1 className="masthead__title">
      <a
        href="http://www.ominidi.org"
        title="Ominidi.org"
        className="color-white"
      >
        Ominidi
      </a>
    </h1>
    <Navigation navItems={navItems} />
  </header>
);

export default Header;
