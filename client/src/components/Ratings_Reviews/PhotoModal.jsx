/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const PicModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 24px;
  border: 2.5px solid black;
  zIndex=1000;
`;
const Close = styled.button`
  position: absolute;
  margin: 5px;
  background: transparent;
  border: none;
  top: 0;
  left: 0;
  &:hover {
    background: red;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);

`;
const PhotoModal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <Overlay />
      <PicModal>
        <Close type="button" onClick={() => { onClose(); }}> x</Close>
        {children}
      </PicModal>
    </>, document.getElementById('portal'),
  );
};
export default PhotoModal;
