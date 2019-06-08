import React from 'react';
import PropTypes from 'prop-types';

/**
 * Photo render a single photo.
 *
 * @author Gabriele D'Arrigo <darrigo.g@gmail.com>
 * @param props
 * @returns {XML}
 * @constructor
 */
const Photo = ({
  id,
  src,
  alt,
  caption,
}) => (
  <div className="photos__item" data-id={id}>
    <article className="card">
      <figure className="card__picture">
        <img
          src={src}
          title={alt}
          alt={alt}
        />
      </figure>

      <footer className="card__footer">
        <h5 className="card__caption title-6">
          { caption }
        </h5>
      </footer>
    </article>
  </div>
);

Photo.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
};

Photo.defaultProps = {
  alt: null,
  caption: null,
};

export default Photo;
