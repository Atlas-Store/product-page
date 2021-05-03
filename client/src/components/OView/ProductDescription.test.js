import React from 'react';
import ReactDOM from 'react-dom';
import ProductDescription from './ProductDescription';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductDescription />, div);
});
