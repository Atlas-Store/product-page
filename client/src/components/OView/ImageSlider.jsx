import React, {useState} from 'react';
import Slider from 'react-slick';
import {ProductImageDiv, ProductImage} from './StyledItems.jsx';
import Modal from './Modal'
import styled, {css} from 'styled-components';

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}



const Wrapper = styled.div`
  // display: flex;
  // flex-direction: row;
  // justify-content: safe center;
`

const NoImageAvailable = styled.img`
  width: 500;
  height: 500;
`

const CenteredDiv = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

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
  const [isOpen, setIsOpen] = useState(false)
  // console.log('in ImageSlider, props.handleClickProductImageDiv is', props.handleClickProductImageDiv);

  const nextClick = (e) => {
    // console.log(e);
    props.objSlideToContinueFrom.current = e;
    // props.specifySlideToContinueFrom(e);
  }

  let settings = {
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
    afterChange: nextClick
    // onReInit: () => (Slider.slickGoTo(0))
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true
  };



  let arrConsecutiveNums = new Array(40);
  for (let i = 0; i < arrConsecutiveNums.length; i++) {
    arrConsecutiveNums[i] = i;
  }

  const regularSlider = () => (
    // <Wrapper>
    <Slider {...settings} >

    {arrConsecutiveNums.map(item => {
    if (props.currentGroupOfImageURLs['photos'][item]) {
      return (<div>
        <ProductImageDiv >
        {/* <ProductImage src={(props.currentGroupOfImageURLs['photos'][item]) ? (props.currentGroupOfImageURLs['photos'][item]['url']) : 'imageSubstitute.png'} onClick={props.handleClickProductImageDiv} onClick={() => setIsOpen(true)}/> */}
        <ProductImage src={props.currentGroupOfImageURLs['photos'][item]['url']} onClick={props.handleClickProductImageDiv} onClick={() => setIsOpen(true)}/>
      </ProductImageDiv>

      {/* <ThumbnailImage /> */}
      </div>)
    }
  }

    )}
      </Slider>
      // </Wrapper>
  )

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
          <ProductImageDiv >
            <ProductImage src={(props.currentGroupOfImageURLs['photos'][props.objSlideToContinueFrom.current]) ? (props.currentGroupOfImageURLs['photos'][props.objSlideToContinueFrom.current]['url']) : 'imageSubstitute.png'} size={650} onClick={props.handleClickProductImageDiv} />
          </ProductImageDiv>
        </Modal>
      </div>

      {/* <div style={OTHER_CONTENT_STYLES}>Other Content</div> */}


    </div>

  )

  // else if (!props.resetSliderForExpandedView) {
  //   return regularSlider();
  // }
  // else if (props.resetSliderForExpandedView) {
  //   slideToContinueFrom = 0;
  //   return regularSliderTwo();


}


export default ImageSlider;