import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  display: inline-block;
  background-color: transparent;
  border: 2.5px solid black;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 10px;
`;

function MoreQuestionsButton({ onClick }) {
  return (
    <Button onClick={onClick}>MORE QUESTIONS</Button>
  );
}

MoreQuestionsButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MoreQuestionsButton;
