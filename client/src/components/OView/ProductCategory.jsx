import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';

const ProdCategory = styled.h4`
  color: black;
  font: 1.0em 'Arial', sans-serif;
  display: flex;
  justify-content: flex-start;
  // flex: 2
`;
// style={{flex: 2, backgroundColor: "red"}}

const ProductCategory = (props) => {
  // console.log(props.category);
  return(
    <div>
      <ProdCategory id='prodCategory'>{props.category.toUpperCase()}</ProdCategory>
    </div>

  )
}

export default ProductCategory;