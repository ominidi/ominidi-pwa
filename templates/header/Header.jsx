import React from 'react';

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
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__menu__item">
          <a
            href="/"
            title="Manifesto"
            className="navbar__menu__link to-manifest"
          >
            Manifesto
          </a>
        </li>

        <li className="navbar__menu__item">
          <a
            href="/photo"
            title="Foto"
            className="navbar__menu__link to-photos"
          >
            Foto
          </a>
        </li>

        <li className="navbar__menu__item">
          <a
            href="/attributions"
            title="Attributions"
            className="navbar__menu__link to-attributions"
          >
            Attributions
          </a>
        </li>

        <li className="navbar__menu__item">
          <a
            href="/downloads"
            title="Downloads"
            className="navbar__menu__link to-downloads"
          >
            Downloads
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
