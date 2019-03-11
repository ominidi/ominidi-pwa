import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const menuItems = [
  {
    href: '/',
    title: 'Manifest',
    text: 'Manifest',
  },
  {
    href: '/photos',
    title: 'Photos',
    text: 'Photos',
  },
  {
    href: '/attributions',
    title: 'Attributions',
    text: 'Attributions',
  },
  {
    href: '/downloads',
    title: 'Downloads',
    text: 'Downloads',
  },
];

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
    <Navbar menuItems={menuItems} />
  </header>
);

export default Header;
