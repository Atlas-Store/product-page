import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Answer from './Answer';

const Row = styled.div`
  display:flex;
  background-color: lightgreen;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  margin: 20ev;
  padding: 20ev;
`;

function QAEntry({ question }) {
  // const sortedAnswers = Object.keys(question.answers);
  // sortedAnswers.sort((a, b) => {})

  return (
    <div>
      <Row>
        <Col size={2} padding={10}>
          Q:
          {question.question_body}
        </Col>
        <Col size={1} padding={100}>
          helpful? yes
          (
          {question.question_helpfulness}
          ) | add answer
        </Col>
      </Row>
      <Answer answers={question.answers} />
    </div>
  );
}

QAEntry.propTypes = {
  question: PropTypes.shape({
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
  }).isRequired,
};

export default QAEntry;
