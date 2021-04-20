import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import $ from 'jquery';

import RelatedProducts from './relatedProductsAndComp/RelatedProducts';

import config from '../../../config';

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [styles, setStyles] = useState(null);

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

  return (
    <div>
      <p>
        You clicked
        { count }
        {' '}
        times
      </p>
      <p>
        { products.map(
          (product) => <p>{ product.id + ' ' + product.name }</p>,
        ) }
      </p>
      <RelatedProducts productId={23145} />
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
