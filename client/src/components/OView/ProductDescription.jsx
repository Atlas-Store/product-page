import React from 'react';
import styled, {css} from 'styled-components';

const ProdDescription = styled.div`
  color: black;
  font: 1.2em 'Arial', sans-serif;
  display: flex;
  justify-content: flex-start;
  flex: 1;
`;

function ProductDescription(props) {
  return (
    <ProdDescription id='prodDescription'>
      {props.description}
      <br/><br/>
    </ProdDescription>
  )
}
export default ProductDescription;