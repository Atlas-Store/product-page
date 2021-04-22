import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Row = styled.div`
  display:flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  margin: 20ev;
  padding: 20ev;
`;

function QAEntry({ question }) {
  const [aCount, setACount] = useState(2);

  const handleMoreAnswersClick = () => {
    setACount((state) => state + 2);
  };
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
      {Object.keys(question.answers).slice(0, aCount).map((key) => {
        const answer = question.answers[key];
        return (
          <div key={key}>
            <div>
              <Col size={2}>
                <p>
                  A:
                  {answer.body}
                </p>
              </Col>
            </div>
            <div>
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
            </div>
          </div>
        );
      })}
      {Object.keys(question.answers).length > aCount
        && <button type="button" onClick={handleMoreAnswersClick}>Load More Answers</button>}
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
