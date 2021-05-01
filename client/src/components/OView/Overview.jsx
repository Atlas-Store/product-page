import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import $ from 'jquery';
import StarRating from './StarRating';
import ProductSelector from './ProductSelector';
import ProductDescription from './ProductDescription';
import ProductTitle from './ProductTitle';
import Price from './Price';
import ProductCategory from './ProductCategory';
import StyleSelector from './StyleSelector';
import dataFirstProduct, { productReview } from './sample_data_styles';
import ImageGallery from './ImageGallery';

import { ProductImage, ProductImageDiv } from './StyledItems';
import ImageSlider from './ImageSlider';
import Modal from './Modal';

export const Grid = styled.div`
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const Col = styled.div`
  // display: flex;
  flex: ${(props) => props.size};
  // justify-content: center;
  // flex: 2;

`;
export const CenteredColImageGallery = styled.div`
  display: flex;
  flex: ${(props) => props.size};
  justify-content: center;
  align-items: center;
  width: 1200;
  height: 600;
  // margin-right: 100px;
`;

export const CenteredColRestOfOverview = styled.div`
  display: flex;
  flex: ${(props) => props.size};
  justify-content: center;
  // width: 1200;
  // height: 600;
  margin-left: 68px;
`;

const WrapperForRestofOverview = styled.div`
  width:
`;

const slideToStartFromInExpandedView = false;

const Overview = ({ currentProduct, styles, starRating }) => {
  const stylesURLs = [];
  for (let i = 0; i < styles.results.length; i++) {
    stylesURLs.push(styles.results[i].photos[0].url);
  }
  console.log('in Overview, currentProduct is', currentProduct);
  let avgStarRating = 0;
  let sum = 0;
  let numOfRatings = 0;

  for (var key in starRating.ratings) {
    numOfRatings += Number(starRating.ratings[key]);
  }

  for (var key in starRating.ratings) {
    sum += Number(key) * Number(starRating.ratings[key]);
  }
  avgStarRating = sum / numOfRatings;

  const [rating, setRating] = useState(avgStarRating || 0);
  const [currentImageURL, setCurrentImageURL] = useState(stylesURLs[0]);
  const [currentStyleID, setCurrentStyleID] = useState(styles.results[0].style_id);
  const [currentGroupOfImageURLs, setCurrentGroupOfImageURLs] = useState(styles.results.map((item) => item)[0]);
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const isExpandedView = useRef(false);

  console.log('the current style index is, ', currentStyleIndex);

  const [abc, setAbc] = useState(false);
  const slideToContinueFrom = useRef(0);

  const resetSliderToFirstImage = () => {
    // settings.initialSlide = 3;
    // setSettingsCurrentSlideToZero(!settingsCurrentSlideToZero);
  };

  const handleClickStyle = () => {
    slideToContinueFrom.current = 0;
    setAbc(!abc);
  };

  const handleClickProductImageDiv = () => {

  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const changeHandler = (event) => {
    setRating(event.target.value);
  };

  return (

    <div>
      {currentProduct
      && (
      <div>
        <Grid>
          <Row>
            <CenteredColImageGallery size={2.5}>
              {/* <Wrapper> */}

              <ImageSlider
                objSlideToContinueFrom={slideToContinueFrom}
                currentGroupOfImageURLs={currentGroupOfImageURLs}
                handleClickProductImageDiv={handleClickProductImageDiv}
                // resetSliderForExpandedView
                objIsExpandedView={isExpandedView}
                key={Date.now()}
              />

              {/* </Wrapper> */}

            </CenteredColImageGallery>
            <CenteredColRestOfOverview size={1}>
              <div>
                {/* Double the size of */}
                <StarRating
                  handleSubmit={handleSubmit}
                  changeHandler={changeHandler}
                  rating={rating}
                />
                <ProductCategory category={currentProduct.category} />
                <ProductTitle title={currentProduct.name} />
                <Price price={currentProduct.default_price} />
                <br />
                <br />
                <StyleSelector
                  setCurrentStyleIndex={setCurrentStyleIndex}
                  stylesURLs={stylesURLs}
                  setCurrentImageURL={setCurrentImageURL}
                  setCurrentGroupOfImageURLs={setCurrentGroupOfImageURLs}
                  styles={styles}
                  resetSliderToFirstImage={resetSliderToFirstImage}
                  handleClickStyle={handleClickStyle}
                />
                <br />
                <br />
                { console.log('in Overview, styles is', styles)}
                <ProductSelector styles={styles} currentStyleIndex={currentStyleIndex} />
                {/* <ProductSelector sizes={} quantities={}/> */}
              </div>
            </CenteredColRestOfOverview>
          </Row>
          <Row>
            <Col>
              <br />
              <br />
              <ProductDescription description={currentProduct.description} />
            </Col>
          </Row>
        </Grid>
      </div>
      )}

    </div>
  );
};

// Overview.propTypes = {
//   currentProduct: PropTypes.objectOf(PropTypes.object()).isRequired,
// };

export default Overview;
