import React, { useState } from 'react';
import styled from 'styled-components';
import PhotoModal from './PhotoModal';

const Thumbnail = styled.img`
  height: 96px;
  width: 144px;
`;
const ImageButton = styled.button`
  background-color: transparent;
  border: none;
`;
const ReviewPhotos = (props) => {
  const { images } = props;
  const [isOpen, setIsOpen] = useState(false);
  const photos = images.map((aPhoto) => (
    <span>
      <ImageButton type="button" onClick={() => setIsOpen(true)}>
        <Thumbnail alt="By a reviewer" src={aPhoto.url} />
      </ImageButton>
      <PhotoModal open={isOpen} onClose={() => setIsOpen(false)}>
        <Thumbnail alt="By a reviewer" src={aPhoto.url} />
      </PhotoModal>
    </span>

  ));
  return (
    photos
  );
};

export default ReviewPhotos;
