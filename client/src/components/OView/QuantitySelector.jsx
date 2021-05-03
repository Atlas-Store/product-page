import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const SelectQuantity = styled.select`
  background: transparent;
  border-radius: 3px;
  border: 2px solid gray;
  color: gray;
  font-size: 14px;
  margin: 0 1em;
  padding: 0.70em 1.15em;
  cursor: pointer;
  `;

const QuantitySelector = ({ currentStylesUpdated, selectedSize }) => {
  let totalQuantityForSelectedStyleAndSelectedSize = 0;
  for (const skuNum in currentStylesUpdated) {
    if (currentStylesUpdated[skuNum].size === selectedSize) {
      totalQuantityForSelectedStyleAndSelectedSize
      += currentStylesUpdated[skuNum].quantity;
    }
  }
  if (totalQuantityForSelectedStyleAndSelectedSize > 15) {
    totalQuantityForSelectedStyleAndSelectedSize = 15;
  }
  const arrOfNumsQuantity = Array.from(
    { length: totalQuantityForSelectedStyleAndSelectedSize },
    (_, index) => index + 1
  );

  return (
    <SelectQuantity name="selectQuantity" id="quantitySelect">
      <option value="">Select Quantity</option>
      {selectedSize ? arrOfNumsQuantity.map((quantityValue, i) => (
        <option value={String(quantityValue)}>{quantityValue}</option>
      )) : undefined}
    </SelectQuantity>
  );
};

export default QuantitySelector;
