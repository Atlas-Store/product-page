import React from 'react';
import PropTypes from 'prop-types';

function NextArrow({ className, size, onClick }) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={className}
      style={{
        position: 'absolute',
        right: `${size / 4}px`,
        width: `${size}px`,
        height: `${size}px`,
        display: 'block',
      }}
      onClick={onClick}
      onKeyDown={onClick}
    />
  );
}

function PrevArrow({ className, size, onClick }) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={className}
      style={{
        zIndex: '1',
        position: 'absolute',
        left: `${size / 4}px`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      onClick={onClick}
      onKeyDown={onClick}
    />
  );
}

NextArrow.propTypes = {
  className: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

PrevArrow.propTypes = {
  className: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { NextArrow, PrevArrow };
