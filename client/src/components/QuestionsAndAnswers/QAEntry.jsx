import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from './Layout';

function QAEntry({ question }) {
  const [aCount, setACount] = useState(2);

  const handleMoreAnswersClick = () => {
    setACount((state) => state + 2);
  };

  return (
    <Container>
      <Row>
        <Col size={2}>
          Q:
          {question.question_body}
        </Col>
        <Col size={1}>
          helpful? yes
          (
          {question.question_helpfulness}
          ) | add answer
        </Col>
      </Row>
      {Object.keys(question.answers).slice(0, aCount).map((key) => {
        const answer = question.answers[key];
        return (
          <Container>
            <Row>
              <Col size={2}>
                <p>
                  A:
                  {answer.body}
                </p>
              </Col>
            </Row>
            <Row>
              <Col size={2}>
                <span>
                  {answer.answerer_name}
                  |
                  {answer.date}
                  | helpful? yes
                  (
                  {answer.helpfulness}
                  )
                  | report
                </span>
              </Col>
            </Row>
          </Container>
        );
      })}
      {Object.keys(question.answers).length > aCount
            && <Row><Col onClick={handleMoreAnswersClick}>Load More Question</Col></Row>}
    </Container>
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
