import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  // transform: translate(2, 2);
  background-color: white;
  border: solid black 1px;
  padding: 15px;
  z-Index: 1000;
  width: auto;
  td {
    text-align: center;
  };
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-Index: 1000;
`;

function Modal() {
  const element = document.createElement('div');
  const modalRoot = document.getElementById('QAPortal');

  useEffect(() => {
    modalRoot.appendChild(element);

    return () => {
      modalRoot.removeChild(element);
    };
  }, []);

  return ReactDom.createPortal(
    <>
      <Overlay />
      <ModalWrapper>
        Hello World
      </ModalWrapper>
    </>,
    document.getElementById('QAPortal'),
  );
}

export default Modal;
