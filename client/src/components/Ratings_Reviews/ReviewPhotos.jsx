import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  padding: 20px;
  height: 96px;
  width: 144px;
`;
const ReviewPhotos = (props) => {
  const { images } = props;

  const photos = images.map((aPhoto) => (
    <span>
      <Thumbnail alt="By a reviewer" src={aPhoto.url} />
    </span>
  ));
  return (
    photos
  );
};

export default ReviewPhotos;
