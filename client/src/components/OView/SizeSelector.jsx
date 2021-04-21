import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';

const SelectSize = styled.select`
  background: transparent;
  border-radius: 3px;
  border: 2px solid gray;
  color: gray;
  font-size: 16px;
  margin: 0 1em;
  padding: 0.60em 1.35em;
  cursor: pointer;
    option {
      color: red;
    }
  `

// const SizeOption = styled.option`
// background: transparent;
// border-radius: 3px;
// border: 2px solid green;
// color: green;
// margin: 0 1em;
// padding: 0.25em 1em;
// `
const SizeSelector = (props) => {
  return (
    <SelectSize name="selectSize" id="sizeSelect">
      <option value="">Select Size</option>
      <option value="XS">XS</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
      </SelectSize>
  )
}

export default SizeSelector;