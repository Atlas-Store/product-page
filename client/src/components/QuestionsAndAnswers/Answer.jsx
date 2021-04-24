import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AnswerWrapper = styled.div`
background-color: grey;
// text-indent: 1.5em
// max-height: 50vh;
// overflow: auto;
`;

const Body = styled.span`
  padding-left: 15px;
`;
const AnswerInfo = styled.p`
  padding-left: 15px
`;

const ALabel = styled.span`
  margin-right: -10px;
`;

function Answer({ answers }) {
  const [aCount, setACount] = useState(2);

  const handleMoreAnswersClick = () => {
    setACount(Object.keys(answers).length);
  };

  const handleLessAnswer = () => {
    setACount(2);
  };

  const renderAnswerButtons = () => {
    if (Object.keys(answers).length === 0) {
      return <button type="button">add an answer</button>;
    }

    if (Object.keys(answers).length > aCount) {
      return <button type="button" onClick={handleMoreAnswersClick}>Load More Answers</button>;
    }

    if (Object.keys(answers).length === aCount && Object.keys(answers).length > 2) {
      return <button type="button" onClick={handleLessAnswer}>Show Less Answers</button>;
    }
  };

  const sortedIds = Object.keys(answers).sort((a, b) => (
    answers[b].helpfulness - answers[a].helpfulness
  ));

  return (
    <div>
      {sortedIds.slice(0, aCount).map((id, i) => (
        <AnswerWrapper key={answers[id].id}>
          {i === 0 && (
          <ALabel>
            A:
          </ALabel>
          )}
          <Body>{answers[id].body}</Body>
          <AnswerInfo>
            userinfo and date |
            {answers[id].helpfulness}
            | report
          </AnswerInfo>
        </AnswerWrapper>
      ))}
      {renderAnswerButtons()}
    </div>
  );
}

Answer.propTypes = {
  answers: PropTypes.shape({
    id: PropTypes.shape({
      id: PropTypes.number,
      body: PropTypes.string,
      date: PropTypes.string,
      answerer_name: PropTypes.string,
      helpfulness: PropTypes.number,
    }),
  }).isRequired,
};

export default Answer;
