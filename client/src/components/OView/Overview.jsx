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


const Overview = ({currentProduct}) => {

  // for (let i = 0; i < props.products.length; i++) {
  // console.log('dataFirstProduct is', dataFirstProduct);
  // }
  // console.log('currentProduct is ', currentProduct);
  // console.log('currentProduct is ', currentProduct);
  // console.log('stylesURLs is', stylesURLs);

  const [rating, setRating] = useState(0);
  const [currentImageURL, setCurrentImageURL] = useState(stylesURLs[0]);

  const handleClickStyle = () => {

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

  return(
    <div>
      {/* <StarRating /> */}
      {/* 7 */}
      {/* {props.products.map(prod => ( */}
      {currentProduct &&
      <div>
        <Grid>
          <Row>
            <Col size={1.5}>
              <ImageGallery currentImageURL={currentImageURL}/>
            </Col>
            <Col size={1}>
              {/* Double the size of */}
              <StarRating handleSubmit={handleSubmit} changeHandler={changeHandler} rating={rating}/>
              <ProductCategory category={currentProduct.category}/>
              <ProductTitle title={currentProduct.name}/>
              <Price price={currentProduct.default_price}/>
              <br/><br/>
              <StyleSelector stylesURLs={stylesURLs} setCurrentImageURL={setCurrentImageURL}/>
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
      {/* ))} */}
      {/* {props.products.map(prod => )} */}
      {/* <ProductSelector /> */}
      {/* // {props.products.map(prod => (<ProductDescription description={prod.description}/>))} */}

    </div>
  )
}

export default Overview;