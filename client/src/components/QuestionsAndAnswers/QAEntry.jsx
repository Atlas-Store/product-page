import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Answer from './Answer';

const Row = styled.div`
  display:flex;
  margin: 1px
  width: 69vh;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  margin: 5px;
  padding: 20ev;
`;

const Question = styled.p`
  font-weight: bold;
`;

function QAEntry({ question }) {
  return (
    <div>
      <Row>
        <Col size={2}>
          <Question>
            {`Q: ${question.question_body}`}
          </Question>
        </Col>
        <Col size={1}>
          helpful? yes
          (
          {question.question_helpfulness}
          ) | Add Answer
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
