import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorComponent({ message }) {
  return (
    <div className="error">
      <h1>{message}</h1>
    </div>
  );
}

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
