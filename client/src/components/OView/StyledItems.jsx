import styled, {css} from 'styled-components';

// const ProductImage = styled.img`
//   max-width: 480px;
//   max-height: 480px;
//   display: flex;
//   justify-content: flex-start;
// `;

export const ProductImageDiv = styled.div`
  display: flex;
  justify-content: center;
  // align-self: center;

`;

export const ProductImage = styled.img`
  max-height: ${props => props.size || 550}px;
  max-width: ${props => props.size || 550}px;
  object-fit: cover;
  &:hover {
    cursor: ${props => props.cursorType || 'zoom-in'};
  }
`;

export const ThumbnailImage = styled.img`

`

// export default ProductImage;
// export default ProductImageDiv;