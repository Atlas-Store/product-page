import React from 'react';

export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={className}
      style={{
        position: 'absolute',
        right: '10px',
        width: '40px',
        height: '40px',
        display: 'block',
      }}
      onClick={onClick}
    />
  );
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={className}
      style={{
        zIndex: '1',
        position: 'absolute',
        left: '10px',
        width: '40px',
        height: '40px',
      }}
      onClick={onClick}
    />
  );
}