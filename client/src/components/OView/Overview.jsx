import React, { useState, useEffect } from 'react';
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
// import ThumbnailImage from '/ThumbnailImage.jsx';

// import stylesURLs from '../OView/sample_data_styles';

export const Grid = styled.div`
`

export const Row = styled.div`
  display: flex;
`

// export const RowForCurrentImage = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `

export const Col = styled.div`
  flex: ${(props) => props.size};
`
let stylesURLs = [];
  for (let i = 0; i < dataFirstProduct['results'].length; i++) {
  stylesURLs.push(dataFirstProduct['results'][i]['photos'][0]['url']);
  // stylesURLs.push(4);
  // console.log('old mcdonald had a farm')
}

// let stylesIDs = [];
// for (let i = 0; i < dataFirstProduct['results'].length; i++) {
//   stylesIDs.push()
// }

const Wrapper = styled.div`
width: 600px;
position: relative;

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

.slick-prev:before,
.slick-next:before
{
    font-family: 'Monaco';
    font-size: 30px;
    line-height: 1;

    opacity: 1;
    color: gray;
    background: white;
    padding: 0px 10px;
    // border: 1px solid black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.slick-prev
{
    left: ${props => props.left || -25}px;

}

.slick-next
{
  right: ${props => props.right || -25}px;
}

.slick-prev:before
{
    content: '<';
}

.slick-next:before
{
    content: '>';
}

`;

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  initialSlide: 0,
  // currentSlide: 0
  // onReInit: () => (Slider.slickGoTo(0))
  // autoplay: true,
  // autoplaySpeed: 2000,
  // pauseOnHover: true
};


let arrayOfRatings = [];
for (let i = 0; i < productReview['results'].length; i++) {
  // console.log('should be a rating', productReview['results'][i]['rating']);
  arrayOfRatings.push(productReview['results'][i]['rating']);
}

const computeAverageRating = (arrayOfRatings) => {
  let sum = 0;
  for (let i = 0; i < arrayOfRatings.length; i++) {
    sum += arrayOfRatings[i];
  }
  let avg = (sum / arrayOfRatings.length);
  return avg;
}

const Overview = ({currentProduct}) => {
  // console.log('average rating is', computeAverageRating(arrayOfRatings))
  // for (let i = 0; i < props.products.length; i++) {
  console.log('dataFirstProduct is', dataFirstProduct);
  // }
  // console.log('currentProduct is ', currentProduct);
  // console.log('currentProduct is ', currentProduct);
  console.log('stylesURLs is', stylesURLs);

  const [rating, setRating] = useState(computeAverageRating(arrayOfRatings));
  const [currentImageURL, setCurrentImageURL] = useState(stylesURLs[0]);
  const [currentStyleID, setCurrentStyleID] = useState(dataFirstProduct['results'][0]['style_id']);
  const [currentGroupOfImageURLs, setCurrentGroupOfImageURLs] = useState(dataFirstProduct['results'].map(item => item)[0]);
  console.log('current group of image urls is', currentGroupOfImageURLs);
  // const [currentImagesForSelectedStyle, setCurrentImagesForSelectedStyle] = useState(dataFirstProduct)
  // const [currentStyleID, setCurrentStyleID] = useState(dataFirstProduct['results'][0]['style_id']);
  const [settingsCurrentSlideToZero, setSettingsCurrentSlideToZero] = useState(false);
  const [renderExpandedView, setRenderExpandedView] = useState(false);

  // useEffect( () => {

  // })

  const resetSliderToFirstImage = () => {
    settings.initialSlide = 3;
    setSettingsCurrentSlideToZero(!settingsCurrentSlideToZero);
    // $(document).ready(() => {
      // $('.productSlider').slick('unslick');
    // }
    // this.slider.currentSlide = 0;
    // $('.productSlider').slick('slickGoTo', 0);
    // $('.productSlider').slick('unslick');
    // $('.productSlider').slick('slickGoTo', 0);
  }

  const handleClickStyle = () => {

  }

  const handleClickProductImageDiv = () => {
    setRenderExpandedView(!renderExpandedView);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('event is', event);
    // setRating(event.target.value);
    // console.log(rating);
  }


  const changeHandler = (event) => {
    // console.log(rating);
    setRating(event.target.value);
  }

  let defaultView = () => (
    <div>
    {currentProduct &&
    <div>
      <Grid>
        <Row>
          <Col size={1.5}>
          <Wrapper>
      <Slider className='productSlider' {...settings}>

    {[0, 1, 2, 3, 4, 5].map(item =>
    (<div>
      <ProductImageDiv >
      <ProductImage src={currentGroupOfImageURLs['photos'][item]['url']} onClick={handleClickProductImageDiv} />
    </ProductImageDiv>

    {/* <ThumbnailImage /> */}
    </div>)
    )}
          </Slider>
          </Wrapper>

          </Col>
          <Col size={1}>
            {/* Double the size of */}
            <StarRating handleSubmit={handleSubmit} changeHandler={changeHandler} rating={rating}/>
            <ProductCategory category={currentProduct.category}/>
            <ProductTitle title={currentProduct.name}/>
            <Price price={currentProduct.default_price}/>
            <br/><br/>
            <StyleSelector stylesURLs={stylesURLs} setCurrentImageURL={setCurrentImageURL} setCurrentGroupOfImageURLs={setCurrentGroupOfImageURLs} dataFirstProduct={dataFirstProduct} resetSliderToFirstImage={resetSliderToFirstImage}/>
            <br/><br/>
            <ProductSelector />
          </Col>
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

  let expandedView = () => (
    <div>
      {/* <Grid> */}
        {/* <Row> */}
          {/* <Col size={1.5}> */}
          <Wrapper left={-250} right={-250}>
      <Slider className='productSlider' {...settings} >

    {[0, 1, 2, 3, 4, 5].map(item =>
    (<div>
      <ProductImageDiv >
      <ProductImage src={currentGroupOfImageURLs['photos'][item]['url']} onClick={handleClickProductImageDiv} cursorType={'url(testPlus.png)'}/>
    </ProductImageDiv>
    </div>)
    )}
          </Slider>
          </Wrapper>
          </div>
  )
  console.log('settings current slide is', settings.currentSlide);
  if (renderExpandedView === false) {
    return(
      defaultView()
    )
  } else {
    return (
      expandedView()
    )
  }

}

export default Overview;