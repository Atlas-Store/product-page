import React, { useState } from 'react';
import styled, {css} from 'styled-components';

const Star = styled.div`
  --star-size: 20px;
  --star-color: rgb(211, 211, 211);
  --star-background: #fc0;
  --percent: calc(var(--rating) / 5 * 100%);
  display: inline-block;
  font-size: var(--star-size);
  font-family: Times;
  line-height: 1;
  ::before {
    content: "★★★★★";
    letter-spacing: 3px;
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;



`
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
  `
  return (
    <div>
    {/* <form onSubmit={handleSubmit}>
        <Label>How many stars do you rate this item?</Label>
        <input type='text' onChange={changeHandler}></input>
        <button >Rate!</button>
      </form> */}
    {/* <div className="Stars" style={{'--rating': rating}} aria-label="Rating of this product is 2.3 out of 5." ></div> */}
    <Star className="Stars" style={{'--rating': rating}} aria-label="Rating of this product is 4.2 out of 5." ></Star>
    </div>
  )
}

export default StarRating;