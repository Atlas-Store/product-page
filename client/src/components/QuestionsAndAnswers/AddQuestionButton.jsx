import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Button = styled.button`
display: inline-block;
color: black;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid silver;
border-radius: 3px;
// display: block;
`;

function AddQuestionButton() {
  const [showModal, setShowmodal] = useState(false);

  const toggleModal = () => {
    setShowmodal(!showModal);
  };

  const handleSubmit = (event) => {
    const question = event.target.id;
    console.log('handlesubmit', question);
    setShowmodal(!showModal);
  };

  return (
    <div>
      <Button onClick={toggleModal}>Add a Question</Button>
      {
        showModal ? (
          <Modal handleSubmit={handleSubmit} />
        ) : null
      }
    </div>
  );
}

export default AddQuestionButton;
