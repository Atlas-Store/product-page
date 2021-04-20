import React from 'react';
import styled, {css} from 'styled-components';

const ProdTitle = styled.h2`
  color: black;
  font: 2.5em 'Arial', sans-serif;
  display: flex;
  // flex: 1;
  justify-content: flex-start;
`;

function ProductTitle(props) {

  return (
    <ProdTitle>
      {props.title}
    </ProdTitle>
  )
}

export default ProductTitle;