import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Reviews from './Ratings_Reviews/Reviews';

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

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
          (product) => <p>{ product.name }</p>,
        ) }
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Reviews />
    </div>
  );
}

export default App;
