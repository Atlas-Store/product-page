import React from 'react';
import styled, {css} from 'styled-components';

const ProdDescription = styled.div`
  color: black;
  font: 1.2em 'Optima', sans-serif;
  display: flex;
  justify-content: flex-start;
  flex: 1;
`;

function ProductDescription(props) {
  return (
    <ProdDescription id='prodDescription'>
      Product Description/Overview: {props.description}
      <br/><br/>
    </ProdDescription>
  )
}
export default ProductDescription;