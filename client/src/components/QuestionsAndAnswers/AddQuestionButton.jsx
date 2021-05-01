import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import Modal from './Modal';

const Button = styled.button`
position: relative;
display: inline-block;
color: black;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid silver;
border-radius: 3px;
`;

const InputContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: start;
`;

function AddQuestionButton({ currentProductId, currentProduct }) {
  const [isOpen, setIsOpen] = useState(false);
  const [body, setBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleBody = (event) => {
    setBody(event.target.value);
  };

  const handleNickname = (event) => {
    setNickname(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log('handlesubmit');
    event.preventDefault();
    axios.post('/qa/questions', {
      body,
      nickname,
      email,
      productID: currentProductId,
    })
      .then((res) => {
        console.log('succesful post', res);
      })
      .catch((error) => {
        console.log('response', error);
      });
  };

  return (
    <div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h1>
          Ask Your Question About
          {currentProduct.name}
        </h1>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <label htmlFor="body">What is your question?</label>
            <textarea maxLength={1000} placeholder="what is your question" type="textarea" id="question" value={body} onChange={handleBody} />
            <label htmlFor="nickname">*What is your nickname?</label>
            <input placeholder="Example: jackson11!" type="text" id="nickname" required value={nickname} onChange={handleNickname} />
            <label htmlFor="email">*What is your email?</label>
            <input placeholder="what is your email" type="text" id="email" required value={email} onChange={handleEmail} />
          </InputContainer>
          <button type="submit">submit</button>
        </form>
      </Modal>
      <Button type onClick={() => setIsOpen(true)}>Add Question</Button>
    </div>
  );
}

AddQuestionButton.propTypes = {
  currentProduct: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  currentProductId: PropTypes.number.isRequired,
};

export default AddQuestionButton;
