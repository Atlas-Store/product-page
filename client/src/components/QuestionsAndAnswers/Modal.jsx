import React, { useState } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import AddQuestionButton from './AddQuestionButton';

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  // display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-Index: 1000;
`;

const ModalWrapper = styled.div`
  position: fixed;
  display:flex;
  flex-direction: column;
  overflow: auto;
  top: 50%;
  left: 50%;
  min-width: 40vw;
  min-height: 50vh;
  transform: translate(-50%, -50%);
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: white;
  color: #000;
  z-index: 10000;
  border-radius: 10px;
  h1 {
    margin-left: 30%;
  }
  form {
    margin-left: 30%;
    margin-right: 30%;
  }
`;

export default function AddQuestionModal({ open, children, onClose }) {
  const element = document.createElement('div');
  const modalRoot = document.getElementById('portal');

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <Overlay />
      <ModalWrapper>
        <button type onClick={onClose}>X</button>
        {children}
      </ModalWrapper>
    </>,
    document.getElementById('portal'),
  );
}

AddQuestionModal.propTypes = {
  currentProduct: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
