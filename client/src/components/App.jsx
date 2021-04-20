import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import QuestionsAnswers from './QuestionsAndAnswers';
import Overview from './OView/Overview';

function App() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(products[0]);

  useEffect(() => {
    $.ajax({
      method: 'GET',
      url: '/test',
      success: (data) => {
        // console.log(data);
        setProducts(data);
      },
      failure: (res) => {
        console.log(res);
      },
    });
  }, []);

  useEffect(() => {
    setCurrentProduct(products[0]);
  });

  return (
    <div>
      <Overview currentProduct={currentProduct} />
      <QuestionsAnswers />
    </div>
  );
}

export default App;
