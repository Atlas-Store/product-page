import React from 'react';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import { ProductImage, ProductImageDiv } from './StyledItems.jsx';

const ImageGallery = ({ currentImageURL }) => (

  <ProductImageDiv>

    <ProductImage src={currentImageURL} id="onesieImage" />

  </ProductImageDiv>

);

export default ImageGallery;
