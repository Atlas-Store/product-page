import React, { useState } from 'react';
import styled from 'styled-components';
import PhotoModal from './PhotoModal';

const ImageButton = styled.button`
  background: transparent;
  border: none;

`;

const Thumbnail = styled.img`
  height: 96px;
  width: 144px;
  ${ImageButton}:hover & {
    border: 2.5px solid black;
  }
`;

const ActualPhoto = styled.img`
  height: 100%;
  width: 100%;
`;
const ReviewPhotos = (props) => {
  const { image } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <span>
      <ImageButton type="button" onClick={() => setIsOpen(true)}>
        <Thumbnail alt="By a reviewer" src={image} />
      </ImageButton>
      <PhotoModal open={isOpen} onClose={() => setIsOpen(false)}>
        <ActualPhoto alt="By a reviewer" src={image} />
      </PhotoModal>
    </span>
  );
};

export default ReviewPhotos;
