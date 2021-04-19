/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Card from './Card';
import AddCard from './AddCard';

const Wrapper = styled.div`
  width: 600px;
  position: absolute;

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

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={className}
      style={{
        position: 'absolute',
        right: '10px',
        width: '40px',
        height: '40px',
        display: 'block',
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={className}
      style={{
        'z-index': '1',
        position: 'absolute',
        left: '10px',
        width: '40px',
        height: '40px',
      }}
      onClick={onClick}
    />
  );
}

function RelatedProducts() {
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
    <Wrapper>
      <h4>RELATED PRODUCTS</h4>
      <Slider {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
      <h4>YOUR OUTFIT</h4>
      <Slider {...settings}>
        <AddCard />
      </Slider>
    </Wrapper>
  );
}
export default RelatedProducts;
