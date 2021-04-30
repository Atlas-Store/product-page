import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';

let arrOfQuantities = [1, 2, 3, 4, 5];

const SelectQuantity = styled.select`
  background: transparent;
  border-radius: 3px;
  border: 2px solid gray;
  color: gray;
  font-size: 14px;
  margin: 0 1em;
  padding: 0.70em 1.15em;
  cursor: pointer;
  `

// const Option = styled.option`
// `

const QuantitySelector = ({styles, selectedSize, currentStyleIndex}) => {
  // if (selectedSize) {


    let totalQuantityForSelectedStyleAndSelectedSize = 0;
    for (let skuNum in styles['results'][currentStyleIndex]['skus']) {
      if (styles['results'][currentStyleIndex]['skus'][skuNum]['size'] === selectedSize) {
        totalQuantityForSelectedStyleAndSelectedSize += styles['results'][currentStyleIndex]['skus'][skuNum]['quantity']
      }
    }
    if (totalQuantityForSelectedStyleAndSelectedSize > 15) {
      totalQuantityForSelectedStyleAndSelectedSize = 15;
    }
    let arrOfNumsQuantity = Array.from({length: totalQuantityForSelectedStyleAndSelectedSize}, (_, index ) => index + 1);
  // }

  return (
    <SelectQuantity name="selectQuantity" id="quantitySelect" >
      <option value="">Select Quantity</option>
      {selectedSize ? arrOfNumsQuantity.map((quantityValue, i) => (
       <option value={String(quantityValue)}>{quantityValue}</option>
     )) : <option value="1">1</option>}
      {/* <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option> */}
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, i) => (<option value={String(item)} key={i}>{item}</option>))} */}

      {/* {Object.keys(styles['results'][currentStyleIndex]['skus']).map((keyName, i) =>
        <option value={String(styles['results'][currentStyleIndex]['skus'][keyName]['quantity'])}>{styles['results'][currentStyleIndex]['skus'][keyName]['size']}</option>
      ) } */}
      </SelectQuantity>
  )
}

export default QuantitySelector;