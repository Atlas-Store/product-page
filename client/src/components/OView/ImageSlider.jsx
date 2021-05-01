import React, { useState } from 'react';
import Slider from 'react-slick';
import styled, { css } from 'styled-components';
import { ProductImageDiv, ProductImage } from './StyledItems.jsx';
import Modal from './Modal';

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1,
};

const Wrapper = styled.div`
  // display: flex;
  // flex-direction: row;
  // justify-content: safe center;
`;

const InitialWrapper = styled.div`
width: 800px;
// width: auto;
height: 680px;
position: relative;
display: flex;
flex-direction: column;
justify-content: safe center;
// box-sizing: border-box;
background: gray;

.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus
{
  color: white;
  outline: none;
  background: transparent;
}
.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before
{
    opacity: 1;
}
.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before
{
    opacity: 0;
}

.slick-prev:before ,
.slick-next:before
{
    font-family: 'Monaco';
    font-size: 30px;
    line-height: 1;

    opacity: 1;
    color: gray;
    background: white;
    padding: 0px 10px;
    border: 1px solid black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.slick-prev
{
    left: ${(props) => props.left || 20}px;
    z-index: 2;

}

.slick-next
{
  right: ${(props) => props.right || 35}px;
  z-index: 2;
}

.slick-prev:before
{
    content: '<';
}

.slick-next:before
{
    content: '>';
}

.slick-slide {
  // min-width: 100%;
  // margin-top: 1500px;
  margin-top: 17px;
  // margin-right: 100px;
  // margin-left: 100px;
}
`;

const NoImageAvailable = styled.img`
  width: 500;
  height: 500;
`;

const CenteredDiv = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ImageSlider = (props) => {
  // <Slider className='productSlider' {...settings}>
  //   <ProductImageDiv>
  //       <ProductImage src={props.currentGroupOfImageURLs['photos'][item]['url']} />
  //     </ProductImageDiv>
  // </Slider>

  // , setSlideToContinueFrom] = useState(0);

  // if (props.slideToContinueFrom) {
  //   slideToContinueFrom = 0;
  // }
  // slideToContinueFrom = props.slideToContinueFrom || 0;
  const [isOpen, setIsOpen] = useState(false);
  // console.log('in ImageSlider, props.handleClickProductImageDiv is', props.handleClickProductImageDiv);

  const nextClick = (e) => {
    // console.log(e);
    props.objSlideToContinueFrom.current = e;
    // props.specifySlideToContinueFrom(e);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    currentSlide: props.objSlideToContinueFrom.current,
    // centerMode: true,
    // initialSlide: slideToContinueFrom,
    // currentSlide: props.currentSlide,
    afterChange: nextClick,
    // onReInit: () => (Slider.slickGoTo(0))
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true
  };

  const arrConsecutiveNums = new Array(40);
  for (let i = 0; i < arrConsecutiveNums.length; i++) {
    arrConsecutiveNums[i] = i;
  }

  const regularSlider = () => (
    // <Wrapper>
    <InitialWrapper>
    <Slider {...settings}>

      {arrConsecutiveNums.map((item, i) => {
        if (props.currentGroupOfImageURLs.photos[item]) {
          return (
            <div key={i}>
              <ProductImageDiv>
                {/* <ProductImage src={(props.currentGroupOfImageURLs['photos'][item]) ? (props.currentGroupOfImageURLs['photos'][item]['url']) : 'imageSubstitute.png'} onClick={props.handleClickProductImageDiv} onClick={() => setIsOpen(true)}/> */}
                <ProductImage src={props.currentGroupOfImageURLs.photos[item].url} onClick={props.handleClickProductImageDiv} onClick={() => setIsOpen(true)} />
              </ProductImageDiv>

              {/* <ThumbnailImage /> */}
            </div>
          );
        }
      })}
    </Slider>
    </InitialWrapper>
    // </Wrapper>
  );

  // if (props.startFromBeginning === true) {
  //   return sliderThatStartsFromBeginning();
  // } else {
  //   return regularSlider();
  // }
  return (

    <div>
      {regularSlider()}

      <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
        {/* <StyledButton >Expand</StyledButton> */}

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          {/* Fancy Modal */}
          <ProductImageDiv>
            <ProductImage src={(props.currentGroupOfImageURLs.photos[props.objSlideToContinueFrom.current]) ? (props.currentGroupOfImageURLs.photos[props.objSlideToContinueFrom.current].url) : 'imageSubstitute.png'} size={650} onClick={props.handleClickProductImageDiv} />
          </ProductImageDiv>
          {/* {regularSlider()} */}
        </Modal>
      </div>

      {/* <div style={OTHER_CONTENT_STYLES}>Other Content</div> */}

    </div>

  );

  // else if (!props.resetSliderForExpandedView) {
  //   return regularSlider();
  // }
  // else if (props.resetSliderForExpandedView) {
  //   slideToContinueFrom = 0;
  //   return regularSliderTwo();
};

export default ImageSlider;
