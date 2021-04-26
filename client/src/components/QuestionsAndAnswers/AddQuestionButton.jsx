import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

function AddQuestionButton() {
  const [showModal, setShowmodal] = useState(false);

  const toggleModal = () => {
    setShowmodal(!showModal);
  };

  return (
    <div>
      <Button onClick={toggleModal}>Add a Question</Button>
      {
        showModal ? (
          <Modal>
            <h1>Heading</h1>
            <p>Lorem ipsum </p>
            <button
              type="button"
              className="modal-close"
              onClick={toggleModal}
            >
              X
            </button>
          </Modal>
        ) : null
      }
    </div>
  );
}

export default AddQuestionButton;
