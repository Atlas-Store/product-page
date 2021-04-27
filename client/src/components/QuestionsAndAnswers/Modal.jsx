import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
// import AddQuestionButton from './AddQuestionButton';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  margin-left: 50px;
  width: 700px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  h1 {
    margin-left: 30%;
  }
  form {
    margin-left: 30%;
  }
`;

// const StyledForm = styled.form`

//   `;

function Modal({ handleSubmit }) {
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
      <Background>
        <ModalWrapper>
          <h1>Ask Your Question</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="question">
                What is your question?
                <textarea maxLength={1000} placeholder="what is your question" type="textarea" id="question" />
              </label>
            </div>
            <br />
            <div>
              <label htmlFor="nickname">
                What is your nickname?
                <input placeholder="Example: jackson11!" type="text" id="nickname" />
              </label>
            </div>
            <br />
            <div>
              <label htmlFor="email">
                What is your email?
                <input placeholder="what is your email" type="text" id="email" />
              </label>
            </div>
            <br />
            <button type="submit">submit</button>
          </form>
        </ModalWrapper>
      </Background>
    </>,
    document.getElementById('QAPortal'),
  );
}

export default Modal;
