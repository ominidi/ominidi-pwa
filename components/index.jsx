import React from 'react';
import dom from 'react-dom';
import Feed from './feed/Feed';
import Imaginery from './imaginery/Imaginery';

function renderFeed() {
  const container = window.document.querySelector('.photos__content');

  if (container) {
    dom.render(<Feed />, container);
  }
}

function renderImaginery() {
  function getRatio() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const width = window.document.body.clientWidth;
    const height = (width * 9) / 21;

    return {
      width,
      height,
      ratio: width / height,
      isMobile,
    };
  }

  dom.render(<Imaginery getRatio={getRatio} />, window.document.querySelector('.imaginery__placeholder'));
}

renderFeed();
renderImaginery();
