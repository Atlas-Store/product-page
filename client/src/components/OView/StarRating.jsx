import React, { useState } from 'react';
import styled, {css} from 'styled-components';

function StarRating({handleSubmit, changeHandler, rating}) {
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
    <div className="Stars" style={{'--rating': 4.2}} aria-label="Rating of this product is 4.2 out of 5." ></div>
    </div>
  )
}

export default StarRating;