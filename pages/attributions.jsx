/* eslint react/jsx-one-expression-per-line: off */
/* eslint max-len: off */
import React from 'react';
import Page from '../layouts/page/Page';
import '../public/scss/style.scss';

const Attributions = () => (
  <Page title="Attributions">
    <article className="attributions__content">
      <p>
        Ominidi.org è stato creato con software e materiali con licenza <a href="https://www.gnu.org/licenses/license-list.it.html#GPLCompatibleLicenses" title="Free Software license">Free Software</a>, <a href="https://opensource.org/licenses" title="Open Source licenses">Open Source</a> o <a href="https://creativecommons.org/licenses/by/4.0/" title="Creative Commons licese">Creative Commons</a>.
        <br />
      </p>

      <h3>
        Software
      </h3>

      <p>
        Segue un elenco di tutti i gli strumenti utilizzati per la creazione del sito web, degli adesivi e del
        materiale relativo ad Ominidi.
      </p>

      <ul>
        <li>
          <a href="http://www.openoffice.org/it/" title="Apache Open Office">
            Apache Open Office
          </a>
        </li>
        <li>
          <a href="https://inkscape.org/it/" title="Inkscape">
            Inkscape
          </a>
        </li>
        <li>
          <a href="https://www.getpaint.net/" title="Paint.net">
            Paint.net
          </a>
        </li>
        <li>
          <a href="http://pencil.evolus.vn/" title="Pencil Project">
            Pencil Project
          </a>
        </li>
        <li>
          <a href="https://www.jetbrains.com/idea/#chooseYourEdition" title="IntelliJ Community Edition">
            IntelliJ Community Edition
          </a>
        </li>
        <li>
          <a href="https://www.virtualbox.org/" title="Virtual Box">
            Virtual Box
          </a>
        </li>
        <li>
          <a href="https://github.com/" title="Github">
            Github
          </a>
        </li>
        <li>
          <a href="https://www.chromium.org/Home" title="Chromium">
            Chromium
          </a>
        </li>
      </ul>

      <h3>Sviluppo</h3>

      <p>Il sito web di Ominidi è stato sviluppato con le seguenti tecnologie</p>

      <ul>
        <li>
          <a href="https://git-scm.com/" title="Git">
            Git
          </a>
        </li>
        <li>
          <a href="https://github.com/facebook/react" title="React">
            React
          </a>
        </li>
        <li>
          <a href="https://threejs.org/" title="Three.js">
            Three.js
          </a>
        </li>
      </ul>

      <h3>Materiali</h3>

      <ul>
        <li>
          L&apos;immagine del frattale è di <a href="https://sciencevsmagic.net/" title="Nico Disseldrop">Nico Disseldrop</a>
        </li>
        <li>
          L&apos;immagine di Cueva de las Manos usata per la pagina di errore è di <a href="//commons.wikimedia.org/wiki/User:Marianocecowski" title="User:Marianocecowski">Mariano Cecowky</a>
        </li>
        <li>
          I font del sito web appartengono alla famiglia <a href="https://pagure.io/liberation-fonts" title="Liberation Sans">Liberation Sans</a>
        </li>
        <li>
          I testi e gli autori che hanno ispirato, o i cui lavori sono stati utilizzati da Ominidi, sono citati nella pagina del <a href="/manifesto" title="Manifesto">Manifesto </a>
        </li>
      </ul>
    </article>
  </Page>
);

export default Attributions;
