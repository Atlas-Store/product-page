/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const PicModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: 'translate(-50%, -50%)';
  backgroundColor: '#FFF';
  padding: 50px;
  zIndex=1000;
`;
const PhotoModal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <PicModal>
      <button type="button" onClick={() => { onClose(); }}> x</button>
      {children}
    </PicModal>, document.getElementById('photoPortal'),
  );
};
export default PhotoModal;
