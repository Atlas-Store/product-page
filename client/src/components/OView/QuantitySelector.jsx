import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';

let arrOfQuantities = [1, 2, 3, 4, 5];

const SelectQuantity = styled.select`
  background: transparent;
  border-radius: 3px;
  border: 2px solid gray;
  color: gray;
  font-size: 16px;
  margin: 0 1em;
  padding: 0.60em 1.35em;
  cursor: pointer;
  `

const QuantitySelector = (props) => {
  return (
    <SelectQuantity name="selectQuantity" id="quantitySelect">
      <option value="">Select Quantity</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      </SelectQuantity>
  )
}

export default QuantitySelector;