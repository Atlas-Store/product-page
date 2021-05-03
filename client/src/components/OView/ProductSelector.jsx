import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

const AddToCart = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid gray;
    color: gray;
    font-size: 16px;
    margin: 0 1em;
    padding: 0.60em 1.35em;
    cursor: pointer;

    &:hover {
      border: 2px solid green;
      color: green;
    }
  `;

const DisplaySideBySide = styled.div`
    display: block;
  `;

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  `;

function ProductSelector({ styles, currentStyleIndex }) {
  const [selectedSize, setSelectedSize] = useState(0);
  const currentStylesWithoutDuplicateSizes = {};

  let skipToNextIteration = false;
  for (const key in styles.results[currentStyleIndex].skus) {
    for (const keyTwo in currentStylesWithoutDuplicateSizes) {
      if (currentStylesWithoutDuplicateSizes[keyTwo].size
      === styles.results[currentStyleIndex].skus[key].size) {
        currentStylesWithoutDuplicateSizes[keyTwo].quantity
        += styles.results[currentStyleIndex].skus[key].quantity;
        skipToNextIteration = true;
      }
    }
    if (skipToNextIteration === false) {
      currentStylesWithoutDuplicateSizes[key] = {
        size: styles.results[currentStyleIndex].skus[key].size,
        quantity: styles.results[currentStyleIndex].skus[key].quantity,
      };
    }
    skipToNextIteration = false;
  }

  return (
    <div>
      <br />
      <DisplaySideBySide>
        <SizeSelector
          setSelectedSize={setSelectedSize}
          currentStylesUpdated={currentStylesWithoutDuplicateSizes}
        />
        <QuantitySelector
          selectedSize={selectedSize}
          currentStylesUpdated={currentStylesWithoutDuplicateSizes}
        />
      </DisplaySideBySide>
      <br />
      <br />
      <br />
      <CenteredDiv>
        <AddToCart>Add To Cart</AddToCart>
      </CenteredDiv>
    </div>
  );
}

export default ProductSelector;
