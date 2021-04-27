import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QAEntry from './QAEntry';

const QAListStyled = styled.div`
  display: flex;
  flex-flow: column;
  border:1px solid green;
  max-height: 90vh;
  min-width: 69vw;
  overflow: auto;
`;

function QAList({ questions }) {
  const sortedQs = questions;

  sortedQs.sort((a, b) => (
    b.question_helpfulness - a.question_helpfulness
  ));

  return (
    <QAListStyled>
      {questions.map((question) => (
        <QAEntry question={question} key={question.question_id} />
      ))}
    </QAListStyled>
  );
}

QAList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    question_id: PropTypes.number,
    question_body: PropTypes.string,
    question_date: PropTypes.string,
    asker_name: PropTypes.string,
    question_helpfulness: PropTypes.number,
    reported: PropTypes.bool,
    answers: PropTypes.shape({
      id: PropTypes.shape({
        id: PropTypes.number,
        body: PropTypes.string,
        date: PropTypes.string,
        answerer_name: PropTypes.string,
        helpfulness: PropTypes.number,
      }),
    }).isRequired,
  })).isRequired,
};

export default QAList;
