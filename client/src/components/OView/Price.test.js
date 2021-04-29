import React from 'react';
import ReactDOM from 'react-dom';
// import Overview from './Overview';
import Price from './Price';
// import 'jest-dom/extend-expect';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Price></Price>, div)
});