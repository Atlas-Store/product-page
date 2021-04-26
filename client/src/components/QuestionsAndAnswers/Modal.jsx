import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black(0, 0, 0, .5);
  padding: 15px;
  z-Index: 1000;
  max-width: 90vh;
  max-height: 90vh;
  min-width: 90vh;
  min-height: 90vh;
  td {
    text-align: center;
  };
`;

const FormWrapper = styled.div`
  flex-direction: column;
  // transform: translate(2, 2);
  background-color: white;
  border: solid black 1px;
  padding: 15px;
  max-width: 70vh;
  max-height: 700vh;
  min-width: 50vh;
  min-height: 50vh;
  td {
    text-align: center;
  };
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
      <ModalOverlay>
        <FormWrapper>
          <h1>Ask Your Question</h1>
          <h2>
            About
          </h2>
          <form>
            <label htmlFor="question">
              What is your question?
              <input placeholder="what is your question" type="text" id="question" />
            </label>
            <label htmlFor="nickname">
              What is your nickname?
              <input placeholder="Example: jackson11!" type="text" id="nickname" />
            </label>
            <label htmlFor="email">
              What is your email?
              <input placeholder="what is your email" type="text" id="email" />
            </label>
            <button type="button">submit</button>
          </form>
        </FormWrapper>
      </ModalOverlay>
    </>,
    document.getElementById('QAPortal'),
  );
}

export default Modal;
