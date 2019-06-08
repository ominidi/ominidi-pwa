import React from 'react';

const Footer = () => (
  <footer className="footer text-center">
    <small>
      Ominidi.org
    </small>

    <div className="footer__license">
      <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        <img
          alt="Licenza Creative Commons"
          style={{ borderWidth: 0 }}
          src="https://i.creativecommons.org/l/by/4.0/88x31.png"
        />
      </a>

      <br />

      <small>
        Quest&apos;opera è distribuita con Licenza &nbsp;

        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          Creative Commons Attribuzione 4.0 Internazionale
        </a>
      </small>
    </div>

    <div className="footer__license">
      <small>
        Il codice sorgente di quest&apos;opera è distribuito con Licenza &nbsp;

        <a href="https://github.com/ominidi/ominidi.org/blob/master/LICENSE" rel="license" title="Licenza MIT">
          MIT
        </a>
      </small>
    </div>
  </footer>
);

export default Footer;
