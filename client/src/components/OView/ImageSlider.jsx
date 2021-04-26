import React from 'react';
import Slider from 'react-slick';
import {ProductImageDiv, ProductImage} from './StyledItems.jsx';
let slideToContinueFrom = 0;
const ImageSlider = (props) => {
  // <Slider className='productSlider' {...settings}>
  //   <ProductImageDiv>
  //       <ProductImage src={props.currentGroupOfImageURLs['photos'][item]['url']} />
  //     </ProductImageDiv>
  // </Slider>


  console.log('in ImageSlider, props.handleClickProductImageDiv is', props.handleClickProductImageDiv);

  const nextClick = (e) => {
    console.log(e);
    slideToContinueFrom = e;
  }

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // initialSlide: slideToContinueFrom,
    // currentSlide: props.currentSlide,
    afterChange: nextClick
    // onReInit: () => (Slider.slickGoTo(0))
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true
  };

  const sliderThatStartsFromBeginning = () => (
    <Slider {...settings} key={Date.now()}>

    {[0, 1, 2, 3, 4, 5].map(item =>
    (<div>
      <ProductImageDiv >
      <ProductImage src={(props.currentGroupOfImageURLs['photos'][item]) ? (props.currentGroupOfImageURLs['photos'][item]['url']) : 'testPlus.png'} onClick={props.handleClickProductImageDiv} />
    </ProductImageDiv>

    {/* <ThumbnailImage /> */}
    </div>)
    )}
      </Slider>
  )

  const regularSlider = () => (
    <Slider {...settings} initialSlide={slideToContinueFrom}>

    {[0, 1, 2, 3, 4, 5].map(item =>
    (<div>
      <ProductImageDiv >
      <ProductImage src={(props.currentGroupOfImageURLs['photos'][item]) ? (props.currentGroupOfImageURLs['photos'][item]['url']) : 'testPlus.png'} onClick={props.handleClickProductImageDiv} />
    </ProductImageDiv>

    {/* <ThumbnailImage /> */}
    </div>)
    )}
      </Slider>
  )

  const regularSliderTwo = () => (
    <Slider {...settings} currentSlide={0}>

    {[0, 1, 2, 3, 4, 5].map(item =>
    (<div>
      <ProductImageDiv >
      <ProductImage src={(props.currentGroupOfImageURLs['photos'][item]) ? (props.currentGroupOfImageURLs['photos'][item]['url']) : 'testPlus.png'} onClick={props.handleClickProductImageDiv} />
    </ProductImageDiv>

    {/* <ThumbnailImage /> */}
    </div>)
    )}
      </Slider>
  )

  if (props.startFromBeginning === true) {
    return sliderThatStartsFromBeginning();
  } else {
    return regularSlider();
  }

  // else if (!props.resetSliderForExpandedView) {
  //   return regularSlider();
  // }
  // else if (props.resetSliderForExpandedView) {
  //   slideToContinueFrom = 0;
  //   return regularSliderTwo();


}


export default ImageSlider;