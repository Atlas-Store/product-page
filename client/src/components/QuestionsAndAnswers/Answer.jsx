import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';

const AnswerWrapper = styled.div`
  // margin: 10px;
  // background-color: silver (0, 0, 0, 0.5)!important;
  padding: 0.25em 1em;
  border-bottom: 1px solid grey;
  max-height: 50vh;
  min-width: 69vw;
  overflow: auto;
`;

const ALabel = styled.span`
  margin-right: -10px;
  font-weight: bold;
`;

const Body = styled.span`
  padding-left: 15px;
  font-size: 95% !important;
`;

const AnswerInfo = styled.p`
  padding-left: 15px;
  font-size: 80% !important;
`;

const AnswerButton = styled.button`
display: inline-block;
font-weight: bold;
color: black;
font-size: 1em;
margin: 1em;
padding: 0;
border: none;
background: none;
display: block;
`;

const UnderlineText = styled.span`
  text-decoration: underline;
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
    // if (Object.keys(answers).length === 0) {
    //   return <AnswerButton type="button">Add Answer</AnswerButton>;
    // }

    if (Object.keys(answers).length > aCount) {
      return <AnswerButton type="button" onClick={handleMoreAnswersClick}>Load More Answers</AnswerButton>;
    }

    if (Object.keys(answers).length === aCount && Object.keys(answers).length > 2) {
      return <AnswerButton type="button" onClick={handleLessAnswer}>Show Less Answers</AnswerButton>;
    }
  };

  const sortedIds = Object.keys(answers).sort((a, b) => (
    answers[b].helpfulness - answers[a].helpfulness
  ));

  return (
    <AnswerWrapper>
      {sortedIds.slice(0, aCount).map((id, i) => (
        <AnswerWrapper key={answers[id].id}>
          {i === 0 && (
          <ALabel>
            A:
          </ALabel>
          )}
          <Body>{answers[id].body}</Body>
          <AnswerInfo>
            {`${answers[id].answerer_name} `}
            |
            {` ${moment(answers[id].date).format('MMM Do YY')} `}
            | helpful?&nbsp;&nbsp;
            <UnderlineText>Yes&nbsp;</UnderlineText>
            (
            {answers[id].helpfulness}
            ) |&nbsp;&nbsp;
            <UnderlineText>Report</UnderlineText>
          </AnswerInfo>
        </AnswerWrapper>
      ))}
      {renderAnswerButtons()}
    </AnswerWrapper>
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
