import styled from 'styled-components';

export const ProductImageDiv = styled.div`
  display: flex;
  justify-content: center;

`;

export const ProductImage = styled.img`
  max-height: ${(props) => props.size || 550}px;
  max-width: ${(props) => props.size || 700}px;
  object-fit: cover;
  &:hover {
    cursor: ${(props) => props.cursorType || 'zoom-in'};
  }
  loading="lazy"
  alt="Image"
`;

export const ThumbnailImage = styled.img`

`;
