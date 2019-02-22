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
  message,
  fullPicture,
}) => (
  <div className="photos__item" data-id={id}>
    <article className="card">
      <figure className="card__picture">
        <img src={fullPicture} title={message} alt={message} />
      </figure>

      <footer className="card__footer">
        <h5 className="card__caption title-6">
          { message }
        </h5>
      </footer>
    </article>
  </div>
);

Photo.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  fullPicture: PropTypes.string.isRequired,
};

export default Photo;
