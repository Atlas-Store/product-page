import styled, {css} from 'styled-components';

// const ProductImage = styled.img`
//   max-width: 480px;
//   max-height: 480px;
//   display: flex;
//   justify-content: flex-start;
// `;

export const ProductImageDiv = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: center;
  // align-self: center;
  // img {
  //   // display: block;
  //   // object-fit: cover;
  //   width:450px;
  //   // height:450px;
  // };

`;

export const ProductImage = styled.img`
  max-height: ${props => props.size || 550}px;
  max-width: ${props => props.size || 550}px;
  object-fit: cover;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  &:hover {
    cursor: ${props => props.cursorType || 'zoom-in'};
  }
`;

export const ThumbnailImage = styled.img`

`

// export default ProductImage;
// export default ProductImageDiv;