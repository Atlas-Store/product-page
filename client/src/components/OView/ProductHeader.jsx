import React from 'react';
import styled, {css} from 'styled-components';

const ProdCategory = styled.h4`
  color: black;
  font: 1.0em 'Arial', sans-serif;
  // display: flex;
  // justify-content: flex-start;
  // flex: 2
`;

const ProdTitle = styled.h2`
  color: black;
  font: 2.5em 'Arial', sans-serif;
  display: flex;
  // flex: 1;
  justify-content: flex-start;
`;

const ProdPrice = styled.div`
color: black;
font: 1.0em 'Arial', sans-serif;
display: flex;
justify-content: flex-start;
`

function ProductHeader(props) {

  return (
    <div>
      <ProdCategory
      id='prodCategory'>
        {props.category.toUpperCase()}
      </ProdCategory>

      <ProdTitle>
        {props.title}
      </ProdTitle>

      <ProdPrice>
      {'$' + props.price}
      </ProdPrice>
    </div>
  )
}



export default ProductHeader;