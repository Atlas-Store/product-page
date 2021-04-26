import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Modal from './Modal';
import Star from '../OView/StarRating';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border: 1px solid transparent;
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
            product={product}
            currentProduct={props.currentProduct}
            onClose={() => setIsOpen(false)}
          />
          <img
            src={styles.results[0].photos[0].thumbnail_url === null ? './noImg.jpg' : styles.results[0].photos[0].thumbnail_url}
            alt="product thumbnail"
            onClick={() => props.setCurrentProductId(props.productId)}
          />
          <Description>
            <Category>{product.category}</Category>
            <ProductName onClick={() => props.setCurrentProductId(props.productId)}>
              <b>{product.name}</b>
            </ProductName>
            <Price>
              {`$${styles.results[0].original_price}`}
              {' '}
            </Price>
            <Star rating={4.1} />
          </Description>
        </Wrapper>
      )}
    </>

  );
}
export default Card;
