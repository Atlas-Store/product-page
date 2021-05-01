import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import QAList from './QAList';
import MoreQuestionsButton from './MoreQuestionsButton';
import AddQuestionButton from './AddQuestionButton';

const QAWrapper = styled.div`
  // border: 2px solid palevioletred;
  // margin: 1em;
  // padding: 0.25em 1em;
  display:flex;
  flex-direction: column;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  max-height: 90vh;
  min-width: 69vw;
  overflow: auto;
`;

const ConditionalWrapper = styled.div`
  margin: 10px;
  padding: 0.25em 1em;
  border-bottom: 1px solid grey;
  max-height: 90vh;
  min-width: 69vw;
  overflow: auto;
`;

function QuestionsAnswers({ qaResults, currentProductId, currentProduct }) {
  const [questions, setQuestions] = useState(qaResults);
  const [qCount, setQCount] = useState(2);

  const handleMoreQuestionsClick = () => {
    setQCount((state) => state + 2);
  };

  const handleSearch = (searchTerm) => {
    const lowerCaseST = searchTerm.toLowerCase();

    if (searchTerm.length > 2) {
      const filteredQs = questions.filter((question) => {
        const lowerCaseQ = question.question_body.toLowerCase();
        return lowerCaseQ.includes(lowerCaseST);
      });
      setQuestions(filteredQs);
    } else {
      setQuestions(qaResults);
    }
  };

  return (
    <QAWrapper>
      <h1>Questions and Answers</h1>
      <SearchBar handleSearch={handleSearch} />
      <ConditionalWrapper>
        <QAList questions={questions.slice(0, qCount)} />
      </ConditionalWrapper>
      <div>
        {questions.length > qCount && <MoreQuestionsButton onClick={handleMoreQuestionsClick} />}
        <AddQuestionButton currentProductId={currentProductId} currentProduct={currentProduct} />
      </div>
    </QAWrapper>
  );
}

QuestionsAnswers.propTypes = {
  currentProduct: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  currentProductId: PropTypes.number.isRequired,
  qaResults: PropTypes.arrayOf(PropTypes.shape({
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

export default QuestionsAnswers;
