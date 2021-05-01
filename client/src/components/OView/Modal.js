import React from 'react';
import ReactDom from 'react-dom';
import styled, { css } from 'styled-components';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid gray;
  color: gray;

  font-size: 14px;

  margin: 0 1em;
  padding: 0.30em 1.35em;
  cursor: pointer;



  &:hover {
    // font-size: 22px;
    border: 2px solid black;
    color: black;
  }
`;

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <StyledButton onClick={onClose}>X</StyledButton>
        {' '}
        <br />
        <br />
        {children}
      </div>
    </>,
    document.getElementById('portal'),
  );
}
