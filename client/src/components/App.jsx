import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import QuestionsAnswers from './QuestionsAndAnswers';

function App() {
  const [products, setProducts] = useState([]);
  // const [curProduct] = useState(products[0]);

  useEffect(() => {
    $.ajax({
      method: 'GET',
      url: '/test',
      success: (data) => {
        console.log(data);
        setProducts(data);
      },
      failure: (res) => {
        console.log(res);
      },
    });
  }, []);

  return (
    <div>
      <QuestionsAnswers />
    </div>
  );
}

export default App;
