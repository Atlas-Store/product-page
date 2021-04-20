import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import QAList from './QAList';
import MoreQuestionsButton from './MoreQuestionsButton';
import AddQuestionButton from './AddQuestionButton';
import testData from './dummyData';
import { Container, Row, Col } from './Layout';

const dummyData = testData.results;

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
    <Container>
      <Row>
        <SearchBar />
      </Row>
      <QAList questions={questions.slice(0, qCount)} />
      <Row>
        <Col>
          {questions.length > qCount && <MoreQuestionsButton onClick={handleMoreQuestionsClick} />}
        </Col>
        <Col>
          <AddQuestionButton />
        </Col>
      </Row>
    </Container>
  );
}

export default QuestionsAnswers;
