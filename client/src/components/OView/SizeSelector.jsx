import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';

const SelectSize = styled.select`
  background: transparent;
  border-radius: 3px;
  border: 2px solid gray;
  color: gray;
  font-size: 14px;
  margin: 0 1em;
  padding: 0.70em 1.15em;
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
const SizeSelector = ({styles, setSelectedSize, currentStyleIndex}) => {
  // props is styles

  let changeHandler = (event) => {
    setSelectedSize(event.target.value);
  }
  console.log('in SizeSelector, styles is', styles);
  return (
    <SelectSize name="selectSize" id="sizeSelect" onChange={changeHandler}>
      <option value="">Select Size</option>
      {Object.keys(styles['results'][currentStyleIndex]['skus']).map((keyName, i) =>
        <option value={String(styles['results'][currentStyleIndex]['skus'][keyName]['size'])}>{styles['results'][currentStyleIndex]['skus'][keyName]['size']}</option>
      ) }
      {/* <option value="XS">XS</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option> */}
      </SelectSize>
  )
}

export default SizeSelector;