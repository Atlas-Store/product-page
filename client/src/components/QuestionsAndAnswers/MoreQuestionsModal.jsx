import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
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
  overflow-y: auto;
  top: 50%;
  left: 50%;
  min-width: 50vw;
  min-height: 60vw;
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

// const StyledForm = styled.form`

//   `;

function MoreQuestionsModal({ handleSubmit }) {
  const element = document.createElement('div');
  const modalRoot = document.getElementById('portal');

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
        {/* <div> */}
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
              *What is your nickname?
              <input placeholder="Example: jackson11!" type="text" id="nickname" required />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="email">
              *What is your email?
              <input placeholder="what is your email" type="text" id="email" required />
            </label>
          </div>
          <br />
          <button type="submit">submit</button>
        </form>
        {/* </div> */}
      </ModalWrapper>
    </>,
    document.getElementById('portal'),
  );
}

export default MoreQuestionsModal;
