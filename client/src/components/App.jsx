import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Reviews from './Ratings_Reviews/Reviews';
import QuestionsAnswers from './QuestionsAndAnswers';
import Overview from './OView/Overview';

import RelatedProducts from './relatedProductsAndComp/RelatedProducts';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: auto;
  align-items: center;
  font-family: 'Arial'
`;

const Loader = styled.div`
  position: absolute;
  top: 20%;
  left: 45%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid black;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;


  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function App() {
  const [currentProductId, setCurrentProductId] = useState(23145);
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [styles, setStyles] = useState({});
  const [relatedItems, setRelatedItems] = useState([]);
  const [QA, setQA] = useState({});
  const [loading, setLoading] = useState(true);
  const [ratings, setRating] = useState(null);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const productsRequest = axios.get('/products');
    const currentProductRequest = axios.get(`/products/${currentProductId}`);
    const stylesRequest = axios.get(`/products/${currentProductId}/styles`);
    const relatedRequest = axios.get(`/products/${currentProductId}/related`);
    const qaRequest = axios.get(`/qa/questions/${currentProductId}`);
    const ratingRequest = axios.get(`/reviews/meta/${currentProductId}`);
    const reviewsRequest = axios.get(`/reviews/${currentProductId}`);

    Promise.all([productsRequest, currentProductRequest,
      stylesRequest, relatedRequest, qaRequest, ratingRequest, reviewsRequest])
      .then(axios.spread((...responses) => {
        setProducts(responses[0].data);
        setCurrentProduct(responses[1].data);
        setStyles(responses[2].data);
        setRelatedItems(responses[3].data);
        setQA(responses[4].data);
        setRating(responses[5].data);
        setReviews(responses[6].data);
        setLoading(false);
      }))
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  }, [currentProductId]);

  return (
    <>
      {loading ? <Loader /> : (
        <Wrapper>
          <br />
          <br />
          <br />
          <p>
            {console.log('products:', products)}
            {console.log('currentProduct:', currentProduct)}
            {console.log('relatedItems:', relatedItems)}
            {console.log('QA:', QA)}
            {console.log('Ratings:', ratings)}
          </p>
          <section>
            <Overview currentProduct={currentProduct} />
          </section>

          <section>
            <RelatedProducts
              productId={currentProductId}
              setCurrentProductId={setCurrentProductId}
              currentProduct={currentProduct}
              currentStyle={styles}
              relatedItems={relatedItems}
            />
          </section>

          <section>
            <QuestionsAnswers />
          </section>
          <section>
            <Reviews reviews={reviews} ratings={ratings} />
          </section>

        </Wrapper>
      )}
    </>
  );
}

export default App;
