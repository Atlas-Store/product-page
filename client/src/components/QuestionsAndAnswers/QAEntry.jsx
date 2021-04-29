import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Answer from './Answer';

const Row = styled.div`
  display:flex;
  // margin: 10px
  min-width: 39vw;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  margin-top: 10px;
  padding: 20ev;
`;

const Question = styled.p`
  font-weight: bold;
  margin-left: 10px;
`;

const QuestionInfo = styled.p`
  // padding-left: 15px;
  font-size: 80% !important;
  align-self: end;
`;

const AddAnswer = styled.span`
  text-decoration: underline;
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
          <QuestionInfo>
            helpful? yes
            (
            {question.question_helpfulness}
            ) |
            <AddAnswer>Add Answer</AddAnswer>
          </QuestionInfo>
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
