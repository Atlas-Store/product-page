import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from './Arrows';
import Modal from './Modal';
import Star from '../OView/StarRating';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border: 1px solid black;
  margin-right: 20px;
  width: 170px;
  height: 275px;
  img {
    display: block;
    object-fit: cover;
    width:170px;
    height:170px;
  };
  .icon {
    position: absolute;
    right: 4px;
    top: 4px;
    height: 20px;
    width: 20px;
    margin: 4px 4px;
    background: white;
    border-radius: 30px;
    z-Index: 4;
  }

  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .dots
  {
      position: absolute;
      bottom: 5px;

      display: block;

      width: 100%;
      padding: 0;
      margin: 0;

      list-style: none;

      text-align: center;
  }
  .dots li
  {
      position: relative;

      display: inline-block;

      width: 20px;
      height: 20px;
      margin: 0 1px;
      padding: 0;

      cursor: pointer;
  }
  .dots li button
  {
      font-size: 0;
      line-height: 0;

      display: block;

      width: 20px;
      height: 20px;
      padding: 5px;

      cursor: pointer;

      color: transparent;
      border: 0;
      outline: none;
      background: transparent;
  }
  .dots li button:hover,
  .dots li button:focus
  {
      outline: none;
  }
  .dots li button:hover:before,
  .dots li button:focus:before
  {
      opacity: 1;
  }
  .dots li button:before
  {
      font-family: 'slick';
      font-size: 6px;
      line-height: 20px;

      position: absolute;
      top: 0;
      left: 0;

      width: 20px;
      height: 20px;

      content: '•';
      text-align: center;

      opacity: 1;
      color: white;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  .dots li.slick-active button:before
  {
      opacity: 1;
      color: black;
  }

  .slider .slick-prev:hover,
  .slider .slick-prev:focus,
  .slider .slick-next:hover,
  .slider .slick-next:focus
  {
    color: white;
    outline: none;
    background: transparent;
  }
  .slider .slick-prev:hover:before,
  .slider .slick-prev:focus:before,
  .slider .slick-next:hover:before,
  .slider .slick-next:focus:before
  {
      opacity: 0.85;
  }
  .slider .slick-prev.slick-disabled:before,
  .slider .slick-next.slick-disabled:before
  {
      opacity: 0;
  }

  .slider .slick-prev:before,
  .slider .slick-next:before
  {
      font-family: 'Monaco';
      font-size: 15px;
      line-height: 1;

      opacity: 1;
      color: black;
      background: white;
      padding: 0px 5px;
      border: 1px solid black;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  .slider .slick-prev
  {
      left: -25px;
  }

  .slider .slick-prev:before
  {
      content: '<';
  }

  .slider .slick-next:before
  {
      content: '>';
  }


  //hide:
  .hide .slick-prev:hover,
  .hide .slick-prev:focus,
  .hide .slick-next:hover,
  .hide .slick-next:focus
  {
    color: white;
    outline: none;
    background: transparent;
  }
  .hide .slick-prev:hover:before,
  .hide .slick-prev:focus:before,
  .hide .slick-next:hover:before,
  .hide .slick-next:focus:before
  {
      opacity: 0.85;
  }
  .hide .slick-prev.slick-disabled:before,
  .hide .slick-next.slick-disabled:before
  {
      opacity: 0;
  }

  .hide .slick-prev:before,
  .hide .slick-next:before
  {
      font-family: 'Monaco';
      font-size: 0px;
      line-height: 1;

      opacity: 0;
      color: transparent;
      background: white;
      padding: 0px;
      border: none;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  .hide .slick-prev
  {
      left: -25px;
  }

  .hide .slick-prev:before
  {
      content: '';
  }

  .hide .slick-next:before
  {
      content: '.';
  }
`;

const Description = styled.div`
  padding-left: 4px;
`;

const Category = styled.div`
  color: grey;
  text-transform: uppercase;
  font-size: 80%;
  padding-top: 6px;
`;

const ProductName = styled.div`
  padding-top: 5px;
`;

const Price = styled.div`
  padding-top: 3px;
  padding-bottom: 1px;
  font-size: 85%;
`;

const ProductImage = styled.img``;

const useMove = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    e.persist();
    setState((state) => ({ ...state, x: e.clientX, y: e.clientY }));
  };
  return {
    x: state.x,
    y: state.y,
    handleMouseMove,
  };
};

function Card(props) {
  const [styles, setStyles] = useState(null);
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { x, y, handleMouseMove } = useMove();

  const [hovered, setHovered] = useState(false);
  const toggleHoverOn = () => setHovered(true);
  const toggleHoverOff = () => setHovered(false);

  useEffect(() => {
    const stylesRequest = axios.get(`/products/${props.productId}/styles`);
    const currentProductRequest = axios.get(`/products/${props.productId}`);
    const ratingRequest = axios.get(`/reviews/meta/${props.productId}`);

    Promise.all([stylesRequest, currentProductRequest, ratingRequest])
      .then(axios.spread((...responses) => {
        setStyles(responses[0].data);
        setProduct(responses[1].data);
        setRating(responses[2].data);
        setLoading(false);
      }))
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  }, [props.productId]);

  const settings = {
    infinite: true,
    dotsClass: 'dots',
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    nextArrow: <NextArrow size={20} />,
    prevArrow: <PrevArrow size={20} />,
    draggable: false,
  };

  return (
    <>
      {loading ? <div className="loader" /> : (
        <Wrapper onMouseEnter={toggleHoverOn} onMouseLeave={toggleHoverOff}>
          {
            props.cardType === 'outfit' ? (
              <img
                className="icon"
                src="./delete.png"
                alt="delete icon"
                onClick={() => {
                  delete props.outfits[props.productId];
                  props.setOutfits(
                    { ...props.outfits },
                  );
                }}
              />
            )
              : (
                <img
                  className="icon"
                  src="./star.png"
                  alt="star icon"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  onMouseMove={handleMouseMove}
                />
              )
          }
          <Modal
            x={x}
            y={y}
            open={isOpen}
            product={product}
            currentProduct={props.currentProduct}
            onClose={() => {
              setIsOpen(false);
              toggleHoverOff();
            }}
          />
          <Slider {...settings} dots={hovered ? true : false} className={hovered ? 'slider variable-width' : 'hide'}>
            {styles.results.map((item) => (
              <div>
                <ProductImage
                  src={item.photos[0].thumbnail_url === null ? './noImg.jpg' : item.photos[0].thumbnail_url}
                  alt="product thumbnail"
                  onClick={() => props.setCurrentProductId(props.productId)}
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
          <Description>
            <Category>{product.category}</Category>
            <ProductName onClick={() => props.setCurrentProductId(props.productId)}>
              <b>{product.name}</b>
            </ProductName>
            <Price>
              {`$${styles.results[0].original_price}`}
              {' '}
            </Price>
            <Star rating={4.1} size={15} />
          </Description>
        </Wrapper>
      )}
    </>

  );
}
export default Card;
