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
`;

const InitialWrapper = styled.div`
width: 800px;
height: 680px;
position: relative;
display: flex;
flex-direction: column;
justify-content: safe center;
background: white;
border: 2.5px solid black;

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
  margin-top: 17px;
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
  const [isOpen, setIsOpen] = useState(false);

  const nextClick = (e) => {
    props.objSlideToContinueFrom.current = e;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    currentSlide: props.objSlideToContinueFrom.current,

    afterChange: nextClick,
  };

  const arrConsecutiveNums = new Array(40);
  for (let i = 0; i < arrConsecutiveNums.length; i++) {
    arrConsecutiveNums[i] = i;
  }

  const regularSlider = () => (
    <InitialWrapper>
      <Slider {...settings}>

        {arrConsecutiveNums.map((item, i) => {
          if (props.currentGroupOfImageURLs.photos[item]) {
            return (
              <div key={i}>
                <ProductImageDiv>
                  <ProductImage
                    src={props.currentGroupOfImageURLs.photos[item].url}
                    onClick={props.handleClickProductImageDiv}
                    onClick={() => setIsOpen(true)}
                  />
                </ProductImageDiv>

              </div>
            );
          }
        })}
      </Slider>
    </InitialWrapper>
  );

  return (

    <div>
      {regularSlider()}

      <div style={BUTTON_WRAPPER_STYLES}>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <ProductImageDiv>
            <ProductImage
              src={(props.currentGroupOfImageURLs.photos[props.objSlideToContinueFrom.current])
                ? (props.currentGroupOfImageURLs.photos[props.objSlideToContinueFrom.current].url)
                : 'imageSubstitute.png'} size={650} onClick={props.handleClickProductImageDiv}
            />
          </ProductImageDiv>
        </Modal>
      </div>

    </div>

  );
};

export default ImageSlider;
