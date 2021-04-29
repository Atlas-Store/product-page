import React from 'react';
import ReactDOM from 'react-dom';
// import Overview from './Overview';
import ProductSelector from './ProductSelector';
// import 'jest-dom/extend-expect';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductSelector></ProductSelector>, div)
});