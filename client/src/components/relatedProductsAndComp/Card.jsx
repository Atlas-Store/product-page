import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import Modal from './Modal';
import config from '../../../../config';
import Star from '../OView/StarRating';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border: 1px solid transparent;
  margin-right: 20px;
  width: 150px;
  height: 245px;
  img {
    display: block;
    object-fit: cover;
    width:150px;
    height:150px;
  };
  .icon {
    position: absolute;
    right: 0px;
    height: 20px;
    width: 20px;
    margin: 4px 4px;
    background: white;
    border-radius: 30px;
  }
  :hover {
    border: 1px solid black;
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
`;

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
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const {x, y, handleMouseMove} = useMove();

  useEffect(() => {
    $.ajax({
      method: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${props.productId}/styles`,
      headers: {
        Authorization: config.TOKEN,
      },
      success: (res) => {
        setStyles(res);
        $.ajax({
          method: 'GET',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${props.productId}`,
          headers: {
            Authorization: config.TOKEN,
          },
          success: (res) => {
            setProduct(res);
            setLoading(false);
          },
          failure: (res) => {
            console.log(res);
          },
        });
      },
      failure: (res) => {
        console.log(res);
      },
    });
  }, []);
  return (

    <>
      {loading ? <div className="loader" /> : (
        <Wrapper>
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
            onClose={() => setIsOpen(false)}
          />
          <img src={styles.results[0].photos[0].thumbnail_url === null ? './noImg.jpg' : styles.results[0].photos[0].thumbnail_url} alt="product thumbnail" />
          <span>{product.category}</span>
          <span><b>{product.name}</b></span>
          <span>
            {`$${styles.results[0].original_price}`}
            {' '}
          </span>
          <Star rating={0} />
        </Wrapper>
      )}
    </>

  );
}
export default Card;
