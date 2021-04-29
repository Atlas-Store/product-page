import React from 'react';
import styled, {css} from 'styled-components';
import {ProductImage, ProductImageDiv} from './StyledItems.jsx';
import Slider from 'react-slick';




const ImageGallery = ({currentImageURL}) => {

  return (

    <ProductImageDiv>

      <ProductImage src={currentImageURL} id='onesieImage'>
      </ProductImage>


  </ProductImageDiv>

  )

}

export default ImageGallery;