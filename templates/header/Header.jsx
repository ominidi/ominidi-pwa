import React from 'react';

const Header = () => (
  <header className="masthead">
    <div className="imaginery__placeholder" />

    <h1 className="masthead__title">
      <a
        href="https://www.ominidi.org"
        title="Ominidi.org"
        className="color-white"
      >
        <img
          src="/img/ominidi.org.png"
          title="Ominidi.org"
          alt="Ominidi.org"
          className="masthead__logo"
        />
      </a>
    </h1>

    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__menu__item">
          <a
            href="/manifesto"
            title="Manifesto"
            className="navbar__menu__link to-manifest"
          >
            Manifesto
          </a>
        </li>

        <li className="navbar__menu__item">
          <a
            href="/foto"
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
