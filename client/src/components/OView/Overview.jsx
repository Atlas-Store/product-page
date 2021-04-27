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
  // flex: 2;
`


// let stylesIDs = [];
// for (let i = 0; i < dataFirstProduct['results'].length; i++) {
//   stylesIDs.push()
// }

const Wrapper = styled.div`
width: 600px;
position: relative;
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
    left: ${props => props.left || -45}px;

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






let slideToStartFromInExpandedView = false;

const Overview = ({currentProduct, styles, starRating}) => {
  // console.log('average rating is', computeAverageRating(arrayOfRatings))
  // for (let i = 0; i < props.products.length; i++) {

  // console.log('starRating prop here is', starRating);

  // console.log('styles twinkle twinkle little star inside Overview right now is ', styles);
  let stylesURLs = [];
  for (let i = 0; i < styles['results'].length; i++) {
  stylesURLs.push(styles['results'][i]['photos'][0]['url']);
  // stylesURLs.push(4);
  // console.log('old mcdonald had a farm')
  }
  // console.log('dataFirstProduct is', dataFirstProduct);
  // }
  // console.log('blablabla currentProduct is ', currentProduct);
  // console.log('blablabla styles is ', styles)
  // console.log('currentProduct is ', currentProduct);
  // console.log('stylesURLs is', stylesURLs);

  // let arrayOfRatings = [];
  // for (let i = 0; i < productReview['results'].length; i++) {
  //   // console.log('should be a rating', productReview['results'][i]['rating']);
  //   arrayOfRatings.push(productReview['results'][i]['rating']);
  // }

  // const computeAverageRating = (arrayOfRatings) => {
  //   let sum = 0;
  //   for (let i = 0; i < arrayOfRatings.length; i++) {
  //     sum += arrayOfRatings[i];
  //   }
  //   let avg = (sum / arrayOfRatings.length);
  //   return avg;
  // }

  // console.log('productReview finding nemo is', productReview);

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

  // console.log('numOfRatings elmo is', numOfRatings);
  // console.log('sum elmo is', sum);
  // console.log('the average star rating calculated is', avgStarRating);

  const [rating, setRating] = useState(avgStarRating || 0);
  const [currentImageURL, setCurrentImageURL] = useState(stylesURLs[0]);
  const [currentStyleID, setCurrentStyleID] = useState(styles['results'][0]['style_id']);
  const [currentGroupOfImageURLs, setCurrentGroupOfImageURLs] = useState(styles['results'].map(item => item)[0]);

  // console.log('current group of image urls is', currentGroupOfImageURLs);
  // const [currentImagesForSelectedStyle, setCurrentImagesForSelectedStyle] = useState(dataFirstProduct)
  // const [currentStyleID, setCurrentStyleID] = useState(dataFirstProduct['results'][0]['style_id']);
  // const [settingsCurrentSlideToZero, setSettingsCurrentSlideToZero] = useState(false);
  // const [renderExpandedView, setRenderExpandedView] = useState(false);
  // const [wasJustExpandedView, setWasJustExpandedView] = useState(false);
  // const [startFromFirstSlide, setStartFromFirstSlide] = useState(true);
  const [abc, setAbc] = useState(false);
  const slideToContinueFrom = useRef(0);
  // const [slideToContinueFrom, setSlideToContinueFrom] = useState(0);
  // let slideToContinueFrom = 0;

  // useEffect( () => {
  //   if (wasJustExpandedView) {
  //     setWasJustExpandedView(false);
  //   }
  // })

  // console.log('the current group of images URLs is', currentGroupOfImageURLs);

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

  // let makeSlideToContinueFromToZero = false;
  const handleClickStyle = () => {
    // setWasJustExpandedView(false);
    // setStartFromFirstSlide(true);
    console.log('elmos world');
    // makeSlideToContinueFromToZero = true;
    // slideToContinueFrom.current = 17;
    slideToContinueFrom.current = 0;
    setAbc(!abc);

    // slideToStartFromInExpandedView = true;
  }

  const handleClickProductImageDiv = () => {
    // if (renderExpandedView === true) { //if you just rendered the expanded view and now want to switch back to the default view
    //   setWasJustExpandedView(true);

    // // if you just rendered the default view and now want to switch to the expanded view
    // }
    // if (wasJustExpandedView === true) {
    //   setWasJustExpandedView(false)
    // }
    // // else if (wasJustExpandedView === false renderExpandedView === false)
    // //   setWasJustExpandedView(false);
    // // }
    // setRenderExpandedView(!renderExpandedView);


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

  // const specifySlideToContinueFrom = (slide) => {
  //   slideToContinueFrom.current = slide;
  // }
  // console.log('current slide is', ImageSlider.initialSlide);
  // console.log('in Overview, props.handleClickStyle is', handleClickStyle);
  let defaultView = () => {

//     if (startFromFirstSlide === false) {
//     //   var whetherToStartFromBeginning = false;

//     // } else {
//     //   var whetherToStartFromBeginning = true;
//     // }

//     return (


//     <div>
//     {currentProduct &&
//     <div>
//       <Grid>
//         <Row>
//           <Col size={1}>
//           <Wrapper>
//             <ImageSlider startFromBeginning={false} currentGroupOfImageURLs={currentGroupOfImageURLs} handleClickProductImageDiv={handleClickProductImageDiv}/>
//           </Wrapper>

//           </Col>
//           <Col size={3}>
//             {/* Double the size of */}
//             <StarRating handleSubmit={handleSubmit} changeHandler={changeHandler} rating={rating}/>
//             <ProductCategory category={currentProduct.category}/>
//             <ProductTitle title={currentProduct.name}/>
//             <Price price={currentProduct.default_price}/>
//             <br/><br/>
//             <StyleSelector setSlideToContinueFrom={setSlideToContinueFrom} stylesURLs={stylesURLs} setCurrentImageURL={setCurrentImageURL} setCurrentGroupOfImageURLs={setCurrentGroupOfImageURLs} dataFirstProduct={styles} resetSliderToFirstImage={resetSliderToFirstImage} handleClickStyle={handleClickStyle}/>
//             <br/><br/>
//             <ProductSelector />
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//           <br/><br/>
//           <ProductDescription description={currentProduct.description}/>
//           </Col>
//         </Row>
//       </Grid>
//     </div>
// }

//   </div>
//   )
//   } else {
    return (


      <div>
      {currentProduct &&
      <div>
        <Grid>
          <Row>
            <Col size={2.5}>
            <Wrapper>
            {/* <div> */}
            {/* specifySlideToContinueFrom={specifySlideToContinueFrom} slideToContinueFrom={slideToContinueFrom.current}  */}
              <ImageSlider objSlideToContinueFrom={slideToContinueFrom} startFromBeginning={true} currentGroupOfImageURLs={currentGroupOfImageURLs} handleClickProductImageDiv={handleClickProductImageDiv} resetSliderForExpandedView={true} key={Date.now()}/>
            {/* </div> */}
            {/* <Modal /> */}
            </Wrapper>

            </Col>
            <Col size={1}>
              {/* Double the size of */}
              <StarRating handleSubmit={handleSubmit} changeHandler={changeHandler} rating={rating}/>
              <ProductCategory category={currentProduct.category}/>
              <ProductTitle title={currentProduct.name}/>
              <Price price={currentProduct.default_price}/>
              <br/><br/>
              <StyleSelector stylesURLs={stylesURLs} setCurrentImageURL={setCurrentImageURL} setCurrentGroupOfImageURLs={setCurrentGroupOfImageURLs} dataFirstProduct={styles} resetSliderToFirstImage={resetSliderToFirstImage} handleClickStyle={handleClickStyle}/>
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
  }


  // console.log('Overview slide to continue from is ', slideToContinueFrom);

  // let expandedView = () => (
  //   <div>
  //     {/* <Grid> */}
  //       {/* <Row> */}
  //         {/* <Col size={1.5}> */}
  //         <Wrapper left={-250} right={-250}>
  //         <ImageSlider slideToContinueFrom={slideToContinueFrom.current} startFromBeginning={false} currentGroupOfImageURLs={currentGroupOfImageURLs} handleClickProductImageDiv={handleClickProductImageDiv}/>
  //         </Wrapper>
  //         </div>
  // )
  // // console.log('settings current slide is', settings.currentSlide);
  // if (renderExpandedView === false) {
    return (
      defaultView()
    )
  // } else {
  //   return (
  //     expandedView()
  //   )
  // }

}

export default Overview;