import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Star = styled.div`
  --star-size: 15px;
  --star-color: rgb(211, 211, 211);
  --star-background: black;
  --percent: calc(var(--rating) / 5 * 100%);
  display: inline-block;
  font-size: var(--star-size);
  font-family: Times;
  line-height: 1;
  ::before {
    content: "★★★★★";
    letter-spacing: 0px;
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const roundForStar = (num) => {
  const roundedToNearestQuarter = (Math.round(num * 4) / 4);

  // if at X.75
  if (roundedToNearestQuarter - Math.floor(roundedToNearestQuarter) === 0.75) {
    return (roundedToNearestQuarter - 0.13);

  // if at X.25
  } if (roundedToNearestQuarter - Math.floor(roundedToNearestQuarter) === 0.25) {
    return (roundedToNearestQuarter + 0.13);

  // if at X.50 or X.00
  }
  return roundedToNearestQuarter;
};

// let bob = ;

function StarRating({ rating }) {
  const [count, setCount] = useState(0);

  // const [rating, setRating] = useState(5);
  // const styles = {
  //   '--rating': 2.8
  // };
  // const handleMouseEnter = () => {
  //   // if
  //   setRating(4);
  // }
  const Label = styled.label`
    font: 1.0em 'Arial', sans-serif;
  `;
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <Label>How many stars do you rate this item?</Label>
        <input type='text' onChange={changeHandler}></input>
        <button >Rate!</button>
      </form> */}
      {/* <div className="Stars" style={{'--rating': rating}} aria-label="Rating of this product is 2.3 out of 5." ></div> */}
      <Star className="Stars" style={{ '--rating': roundForStar(rating) }} aria-label="Rating of this product is 4.2 out of 5." />
    </div>
  );
}

export default StarRating;
