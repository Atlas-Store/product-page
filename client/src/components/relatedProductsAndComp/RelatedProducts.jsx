/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Card from './Card';
import { PrevArrow, NextArrow } from './Arrows';
import AddCard from './AddCard';

const Wrapper = styled.div`
  width: 700px;
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
      color: black;
      background: white;
      padding: 0px 10px;
      border: 1px solid black;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev
  {
      left: -25px;
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

function RelatedProducts({
  currentProduct, currentStyle,
  relatedItems, productId, setCurrentProductId, outfits, setOutfits
}) {
  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    draggable: false,
  };

  return (
    <>
      <Wrapper>
        <h4>RELATED PRODUCTS</h4>
        <Slider {...settings}>
          {relatedItems.map((item) => (
            <Card productId={item} cardType="related" setCurrentProductId={setCurrentProductId} currentProduct={currentProduct} />
          ))}
        </Slider>
        <h4>YOUR OUTFIT</h4>
        <Slider {...settings}>
          {Object.keys(outfits).map((outfit) => (
            <Card productId={outfit} setOutfits={setOutfits} outfits={outfits} cardType="outfit" />
          ))}
          <AddCard setOutfits={setOutfits} outfits={outfits} currentProduct={productId} />
        </Slider>
      </Wrapper>
    </>
  );
}

export default RelatedProducts;
