import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';

const ProdPrice = styled.div`
color: black;
font: 1.0em 'Arial', sans-serif;
display: flex;
justify-content: flex-start;
`
const Price = (props) => {
  return (
    <ProdPrice>
      {'$' + props.price}
    </ProdPrice>
  )

}

export default Price;