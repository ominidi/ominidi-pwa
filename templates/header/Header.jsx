import React from 'react';
import { navItems } from '../../data/common.yml';
import Navigation from '../../components/navigation/Navigation';

const Header = () => (
  <header className="masthead">
    <div className="masthead__content">
      <div
        className="imaginery"
        style={{
          backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/SantaCruz-CuevaManos-P2210651b.jpg/1200px-SantaCruz-CuevaManos-P2210651b.jpg")',
        }}
      />
      <h1 className="masthead__title">
        <a
          href="https://www.ominidi.org"
          title="Ominidi.org"
          className="color-white"
        >
          <img
            src="/static/assets/img/ominidi.org.png"
            title="Ominidi.org"
            alt="Ominidi.org"
            className="masthead__logo"
          />
        </a>
      </h1>
    </div>
    <Navigation navItems={navItems} />
  </header>
);

export default Header;
