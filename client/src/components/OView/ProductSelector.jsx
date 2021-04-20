import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

const AddToCart = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid green;
    color: green;
    font-size: 16px;
    margin: 0 1em;
    padding: 0.60em 1.35em;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    &:hover {
      font-size: 22px;
    }
  `

function ProductSelector() {
  const [color, setColor] = useState('green');
  const handleMouseEnter = (event) => {
    setColor('red');
    // event.target.color = color;
  }
  return (
    <div>
      <SizeSelector />
      <QuantitySelector />
      <br /><br /><br />
      <AddToCart onMouseEnter={handleMouseEnter}>Add To Cart</AddToCart>
    </div>

    // <button>Add to Cart</button>
  )
}

export default ProductSelector;