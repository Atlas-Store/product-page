import React, { useState, useEffect } from 'react';
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
  border-top: 20px solid blue;
  border-bottom: 20px solid blue;
  max-height: 100vh;
  max-width: 100vh;
  min-width: 50vh;
  overflow: auto;
`;

const ConditionalWrapper = styled.div`
  // border: 2px solid palevioletred;
  margin: 10px;
  // padding: 0.25em 1em;
  border-top: 10px solid green;
  border-bottom: 10px solid green;
  max-height: 100vh;
  max-width: 100vh;
  overflow: auto;
`;

function QuestionsAnswers({ qaResults }) {
  const [questions, setQuestions] = useState(qaResults);
  const [qCount, setQCount] = useState(2);

  useEffect(() => {
    setQuestions(qaResults);
  }, [questions]);

  const handleMoreQuestionsClick = () => {
    setQCount((state) => state + 2);
  };

  const handleSearch = (searchTerm) => {
    const lowerCaseST = searchTerm.toLowerCase();

    const filteredQs = questions.filter((question) => {
      const lowerCaseQ = question.question_body.toLowerCase();
      return lowerCaseQ.includes(lowerCaseST);
    });
    console.log('filteredQuestions inside handle Search: ', filteredQs);
  };

  return (
    <QAWrapper>
      <h1>Questions and Answers</h1>
      <SearchBar handleSearch={handleSearch} />
      <ConditionalWrapper>
        <QAList questions={questions.slice(0, qCount)} />
      </ConditionalWrapper>
      {questions.length > qCount && <MoreQuestionsButton onClick={handleMoreQuestionsClick} />}
      <AddQuestionButton />
    </QAWrapper>
  );
}

QuestionsAnswers.propTypes = {
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
