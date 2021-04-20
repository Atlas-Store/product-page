import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Reviews from './Ratings_Reviews/Reviews';
import QuestionsAnswers from './QuestionsAndAnswers';
import Overview from './OView/Overview';

import RelatedProducts from './relatedProductsAndComp/RelatedProducts';

import config from '../../../config';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(products[0]);

  useEffect(() => {
    // $.ajax({
    //   method: 'GET',
    //   url: '/test',
    //   success: (data) => {
    //     setProducts(data);
    //   },
    //   failure: (res) => {
    //     console.log(res);
    //   },
    // });

    // getting products
    $.ajax({
      method: 'GET',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
      headers: {
        Authorization: config.TOKEN,
      },
      success: (data) => {
        // console.log(data);
        setProducts(data);
      },
      failure: (res) => {
        console.log(res);
      },
    });

    $.ajax({
      method: 'GET',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/23145/styles',
      headers: {
        Authorization: config.TOKEN,
      },
      success: (data) => {
        setStyles(data);
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
    <Wrapper>
      <section>
        <Overview currentProduct={currentProduct} />
      </section>
      <section>
        <QuestionsAnswers />
      </section>
      <section>
        <Reviews />
      </section>
      <section>
        <RelatedProducts productId={23145} />
      </section>
    </Wrapper>
  );
}

export default App;
