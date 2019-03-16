import React from 'react';
import Page from '../layouts/page/Page';
import '../static/scss/style.scss';

const Downloads = () => (
  <Page title="Downloads">
    <article className="downloads__content">
      <p className="text-center">
        In questa sezione è possibile scaricare tutte le risose e i materiali relativi di Ominidi.org
      </p>

      <div className="downloadebles">
        <h4>
          <a
            href="https://github.com/ominidi/downloads/tree/master/stickers"
            title="Clicca qui per scaricare gli adesivi"
          >
            Adesivi / Stickers
          </a>
        </h4>
        <p>
          Ogni adesivo è un Ominide, un virus pronto a proliferare.
        </p>
      </div>

      <div className="downloadebles">
        <h4>
          <a
            href="https://github.com/ominidi/downloads/tree/master/photos"
            title="Clicca qui per scaricare le foto"
          >
            Foto
          </a>
        </h4>
        <p>
          Tutte le foto dei luoghi dove gli Ominidi si sono riappropriati degli spazi dell&apos;Homo Sapiens.
        </p>
      </div>

      <div className="downloadebles">
        <h4>
          <a
            href="https://github.com/ominidi/manifesto/archive/master.zip"
            title="Clicca qui per scaricare il Manifesto"
          >
            Manifesto
          </a>
        </h4>
        <p>
          Il Manifesto di Ominidi.org
        </p>
      </div>

      <div>
        <h4>
          <a
            href="https://github.com/ominidi/design-guidelines/archive/master.zip"
            title="Clicca qui per scaricare le linee guida del design"
          >
            Design guidelines
          </a>
        </h4>
        <p>
          I wireframes, la style guide e i documenti del design di Ominidi.org
        </p>
      </div>
    </article>
  </Page>
);

export default Downloads;
