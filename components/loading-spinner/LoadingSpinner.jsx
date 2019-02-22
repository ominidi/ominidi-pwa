import React from 'react';
import PropTypes from 'prop-types';

/**
 * LoadingSpinner show a loading spinner while loading prop is true.
 *
 * @author Gabriele D'Arrigo <darrigo.g@gmail.com>
 * @param props
 * @returns {XML}
 * @constructor
 */
const LoadingSpinner = ({ loading }) => (
  <div className={loading ? 'loading-spinner loading' : 'loading-spinner'}>
    <div className="loading-spinner__animation" />
  </div>
);

LoadingSpinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default LoadingSpinner;
