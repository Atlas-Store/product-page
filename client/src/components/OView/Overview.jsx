import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import $ from 'jquery';
import StarRating from './StarRating';
import ProductSelector from './ProductSelector';
import ProductDescription from './ProductDescription';
import StyleSelector from './StyleSelector';
import dataFirstProduct, { productReview } from './sample_data_styles';
import { ProductImage, ProductImageDiv } from './StyledItems';
import ImageSlider from './ImageSlider';
import Modal from './Modal';
import ProductHeader from './ProductHeader';

export const Grid = styled.div`
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};

`;
export const CenteredColImageGallery = styled.div`
  display: flex;
  flex: ${(props) => props.size};
  justify-content: center;
  align-items: center;
  width: 1200;
  height: 600;
`;

export const CenteredColRestOfOverview = styled.div`
  display: flex;
  flex: ${(props) => props.size};
  justify-content: center;
  margin-left: 68px;
`;

const WrapperForRestofOverview = styled.div`
  width:
`;

const slideToStartFromInExpandedView = false;

const Overview = ({ currentProduct, styles, starRating }) => {
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

  const stylesURLs = [];
  for (let i = 0; i < styles.results.length; i++) {
    stylesURLs.push(styles.results[i].photos[0].url);
  }

  const [rating, setRating] = useState(avgStarRating || 0);
  const [currentImageURL, setCurrentImageURL] = useState(stylesURLs[0]);
  const [currentStyleID, setCurrentStyleID] = useState(styles.results[0].style_id);
  const [currentGroupOfImageURLs, setCurrentGroupOfImageURLs] = useState(styles.results.map((item) => item)[0]);
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [rerenderPage, setRerenderPage] = useState(false);
  const isExpandedView = useRef(false);

  // console.log('in Overview, currentProduct is', currentProduct);



  // console.log('rating is', rating);


  // console.log('the current style index is, ', currentStyleIndex);


  const slideToContinueFrom = useRef(0);

  const resetSliderToFirstImage = () => {
  };

  const handleClickStyle = () => {
    slideToContinueFrom.current = 0;
    setRerenderPage(!rerenderPage);
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

              <ImageSlider
                objSlideToContinueFrom={slideToContinueFrom}
                currentGroupOfImageURLs={currentGroupOfImageURLs}
                handleClickProductImageDiv={handleClickProductImageDiv}
                objIsExpandedView={isExpandedView}
                key={Date.now()}
              />

            </CenteredColImageGallery>
            <CenteredColRestOfOverview size={1}>
              <div>
                <StarRating
                  handleSubmit={handleSubmit}
                  changeHandler={changeHandler}
                  rating={rating}
                  size={25}
                />
                <ProductHeader
                  category={currentProduct.category}
                  title={currentProduct.name}
                  price={currentProduct.default_price}
                />
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
                <ProductSelector styles={styles} currentStyleIndex={currentStyleIndex} />
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

export default Overview;
