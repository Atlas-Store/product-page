import React, { useState } from 'react';
import styled, {css} from 'styled-components';
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
      // font-size: 22px;
      border: 2px solid green;
      color: green;
    }
  `

  const DisplaySideBySide = styled.div`
    display: block;
  `

  const CenteredDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  `

function ProductSelector(props) {
  const [color, setColor] = useState('green');
  const handleMouseEnter = (event) => {
    setColor('red');
    // event.target.color = color;
  }
  return (
    <div>
    <DisplaySideBySide>
      <SizeSelector /><QuantitySelector />
      </DisplaySideBySide>
      <br /><br />
      <CenteredDiv>
      <AddToCart onMouseEnter={handleMouseEnter}>Add To Cart</AddToCart>
      </CenteredDiv>
      </div>

    // <button>Add to Cart</button>
  )
}

export default ProductSelector;