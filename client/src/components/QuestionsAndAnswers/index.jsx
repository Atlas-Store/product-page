import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import QAList from './QAList';
import MoreQuestionsButton from './MoreQuestionsButton';
import AddQuestionButton from './AddQuestionButton';
import testData from './dummyData';

const dummyData = testData.results;

const QAWrapper = styled.div`
  // border: 2px solid palevioletred;
  // margin: 1em;
  // padding: 0.25em 1em;
  border-bottom: 20px solid blue;
  max-height: 100vh;
  overflow: auto;
`;

function QuestionsAnswers({ productId }) {
  const [questions, setQuestions] = useState([]);
  const [qCount, setQCount] = useState(2);

  useEffect(() => {
    setQuestions(dummyData);
  }, []);

  const handleMoreQuestionsClick = () => {
    setQCount((state) => state + 2);
  };

  return (
    <div>
      <h1>Questions and Answers</h1>
      <SearchBar />
      <QAWrapper>
        <QAList questions={questions.slice(0, qCount)} />

        {questions.length > qCount && <MoreQuestionsButton onClick={handleMoreQuestionsClick} />}

        <AddQuestionButton />
      </QAWrapper>
    </div>
  );
}

export default QuestionsAnswers;
