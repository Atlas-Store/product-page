import React, { useState, useEffect, useRef } from 'react';
import styled, {css} from 'styled-components';
import StarRating from './StarRating.jsx';
import ProductSelector from './ProductSelector.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductTitle from './ProductTitle.jsx';
import Price from './Price.jsx';
import ProductCategory from './ProductCategory.jsx';
import StyleSelector from './StyleSelector.jsx';
import dataFirstProduct from '../OView/sample_data_styles';
import ImageGallery from './ImageGallery.jsx';
import Slider from 'react-slick';
import {productReview} from './sample_data_styles';
import {ProductImage, ProductImageDiv} from './StyledItems.jsx';
import $ from 'jquery';
import ImageSlider from './ImageSlider.jsx';
import Modal from './Modal.js';


export const Grid = styled.div`
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
`



export const Col = styled.div`
  // display: flex;
  flex: ${(props) => props.size};
  // justify-content: center;
  // flex: 2;

`
export const CenteredColImageGallery = styled.div`
  display: flex;
  flex: ${(props) => props.size};
  justify-content: center;
  align-items: center;
  width: 1200;
  height: 600;
  // margin-right: 100px;
`

export const CenteredColRestOfOverview = styled.div`
  display: flex;
  flex: ${(props) => props.size};
  justify-content: center;
  // width: 1200;
  // height: 600;
  margin-left: 68px;
`



const Wrapper = styled.div`
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
    left: ${props => props.left || 20}px;
    z-index: 2;

}

.slick-next
{
  right: ${props => props.right || 35}px;
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


const WrapperForRestofOverview = styled.div`
  width:
`



let slideToStartFromInExpandedView = false;

const Overview = ({currentProduct, styles, starRating}) => {
  let stylesURLs = [];
  for (let i = 0; i < styles['results'].length; i++) {
  stylesURLs.push(styles['results'][i]['photos'][0]['url']);

  }


  let avgStarRating = 0;
  let sum = 0;
  let numOfRatings = 0;

  for (var key in starRating['ratings']) {
    numOfRatings += Number(starRating['ratings'][key]);
  }

  for (var key in starRating['ratings']) {
    sum += Number(key)*Number(starRating['ratings'][key]);
  }
  avgStarRating = sum / numOfRatings;



  const [rating, setRating] = useState(avgStarRating || 0);
  const [currentImageURL, setCurrentImageURL] = useState(stylesURLs[0]);
  const [currentStyleID, setCurrentStyleID] = useState(styles['results'][0]['style_id']);
  const [currentGroupOfImageURLs, setCurrentGroupOfImageURLs] = useState(styles['results'].map(item => item)[0]);
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  console.log('the current style index is, ', currentStyleIndex);

  const [abc, setAbc] = useState(false);
  const slideToContinueFrom = useRef(0);


  const resetSliderToFirstImage = () => {
    settings.initialSlide = 3;
    setSettingsCurrentSlideToZero(!settingsCurrentSlideToZero);

  }


  const handleClickStyle = () => {

    slideToContinueFrom.current = 0;
    setAbc(!abc);


  }

  const handleClickProductImageDiv = () => {



  }
  const handleSubmit = (event) => {
    event.preventDefault();

  }


  const changeHandler = (event) => {

    setRating(event.target.value);
  }

    return (


      <div>
      {currentProduct &&
      <div>
        <Grid>
          <Row>
            <CenteredColImageGallery size={2.5}>
            <Wrapper>

              <ImageSlider objSlideToContinueFrom={slideToContinueFrom} startFromBeginning={true} currentGroupOfImageURLs={currentGroupOfImageURLs} handleClickProductImageDiv={handleClickProductImageDiv} resetSliderForExpandedView={true} key={Date.now()}/>

            </Wrapper>

            </CenteredColImageGallery>
            <CenteredColRestOfOverview size={1}>
              <div>
              {/* Double the size of */}
              <StarRating handleSubmit={handleSubmit} changeHandler={changeHandler} rating={rating}/>
              <ProductCategory category={currentProduct.category}/>
              <ProductTitle title={currentProduct.name}/>
              <Price price={currentProduct.default_price}/>
              <br/><br/>
              <StyleSelector setCurrentStyleIndex={setCurrentStyleIndex} stylesURLs={stylesURLs} setCurrentImageURL={setCurrentImageURL} setCurrentGroupOfImageURLs={setCurrentGroupOfImageURLs} dataFirstProduct={styles} resetSliderToFirstImage={resetSliderToFirstImage} handleClickStyle={handleClickStyle}/>
              <br/><br/>
              {  console.log('in Overview, styles is', styles)}
              <ProductSelector styles={styles} currentStyleIndex={currentStyleIndex}/>
              {/* <ProductSelector sizes={} quantities={}/> */}
              </div>
            </CenteredColRestOfOverview>
          </Row>
          <Row>
            <Col>
            <br/><br/>
            <ProductDescription description={currentProduct.description}/>
            </Col>
          </Row>
        </Grid>
      </div>
  }

    </div>
    )


}

export default Overview;