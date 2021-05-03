import React from 'react';
import ReactDOM from 'react-dom';
// import Overview from './Overview';
import ProductDescription from './ProductDescription';
// import 'jest-dom/extend-expect';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductDescription></ProductDescription>, div)
});