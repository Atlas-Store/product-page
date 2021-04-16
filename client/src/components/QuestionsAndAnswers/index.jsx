import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import QAList from './QAList.jsx';
import MoreQuestions from './MoreQuestions';
import AddAQuestion from './AddAQuestion';

function QuestionsAnswers () {
  return (
    <div>
      <SearchBar />
      <QAList />
      <div>
        <MoreQuestions />
        <AddAQuestion />
      </div>
    </div>
  )
}

export default QuestionsAnswers;
