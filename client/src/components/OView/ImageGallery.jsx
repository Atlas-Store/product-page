import React from 'react';
import styled, {css} from 'styled-components';
import {ProductImage, ProductImageDiv} from './StyledItems.jsx';
import Slider from 'react-slick';
// import $ from 'jquery';



const ImageGallery = ({currentImageURL}) => {

  return (

    <ProductImageDiv>
    {/* <Slider {...settings}> */}
    {/* <ProductImageDiv>
      <h3>1</h3>
    </ProductImageDiv> */}
    {/* <div> */}
      <ProductImage src={currentImageURL} id='onesieImage'>
      </ProductImage>
    {/* </div> */}
    {/* <div> */}
      {/* <img src='meadow.jpeg'></img> */}
    {/* </div> */}
    {/* </Slider> */}

  </ProductImageDiv>
  // <div>
  //       <h2> Single Item</h2>
  //       <Slider {...settings}>
  //         <div>
  //           <h3>1</h3>
  //         </div>
  //         <div>
  //           <h3>2</h3>
  //         </div>
  //         <div>
  //           <h3>3</h3>
  //         </div>
  //         <div>
  //           <h3>4</h3>
  //         </div>
  //         <div>
  //           <h3>5</h3>
  //         </div>
  //         <div>
  //           <h3>6</h3>
  //         </div>
  //       </Slider>
  //     </div>
  )

}

export default ImageGallery;