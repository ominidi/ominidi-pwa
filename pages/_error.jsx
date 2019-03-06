import React from 'react';
import '~static/scss/style.scss';
import Page from '../layouts/page/Page';

const Error = () => (
  <Page title="Errore">
    <figure className="error__figure">
      <img src="https://www.researchgate.net/profile/Lars_Taxen/publication/299489921/figure/fig6/AS:652952930906121@1532687518665/Illustration-of-a-mammoth-hunt-Source-Original-wood-engraving-by-E-Bayard-in-Bryant.png" title="Errore" alt="Error" />
    </figure>

    <h3 className="title-4 text-center">
      Niente da vedere qui, torna all&apos;
      <a href="/" title="homepage">
        homepage
      </a>
    </h3>
  </Page>
);

export default Error;
