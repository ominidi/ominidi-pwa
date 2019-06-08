/* eslint-disable react/no-array-index-key */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import Page from '../layouts/page/Page';
import Photo from '../components/photo/Photo';
import '../static/scss/style.scss';

const Photos = () => (
  <Page title="Foto">
    <div className="photos">
      {
        Array.from(Array(25).keys()).map((photo, i) => (
          <Photo
            id={`photo-${i}`}
            key={`photo-${i}`}
            src={`../static/assets/photos/${i + 1}.jpg`}
          />
        ))
      }

      <footer>
        <a
          href="https://www.instagram.com/ominide.hag/"
          title="Vedi altre"
          className="btn btn--primary"
        >
          Vedi altre
        </a>
      </footer>
    </div>
  </Page>
);

export default Photos;
