import React from 'react';

const ImageSlider = (props) => {
  <Slider className='productSlider' {...settings}>
    <ProductImageDiv>
        <ProductImage src={props.currentGroupOfImageURLs['photos'][item]['url']} />
      </ProductImageDiv>
  </Slider>
}

export default ImageSlider;