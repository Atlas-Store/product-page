import React, { useState, useEffect } from 'react';

import $ from 'jquery';
import Overview from './OView/Overview.jsx';

function App() {
  const [count, setCount] = useState(0);
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
  // const componentDidMount() = function() {
  //   useEffect();
  // }
  return (
    <div>
      <Overview currentProduct={currentProduct}/>
      {/* <p>
        You clicked
        { count }
        {' '}
        times
      </p> */}
      {/* <p>
        { products.map(
          (product) => <p>{ product.name }</p>,
        ) }
      </p> */}
      {/* <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
      {/* <div class="stars">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
    </div> */}

    </div>
  );
}

export default App;
