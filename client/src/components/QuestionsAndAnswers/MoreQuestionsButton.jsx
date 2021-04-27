import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

function MoreQuestionsButton({ onClick }) {
  return (
    <Button onClick={onClick}>More Questions</Button>
  );
}

MoreQuestionsButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MoreQuestionsButton;
