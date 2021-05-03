import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Star = styled.div`
  --star-size: 25px;
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
    background: linear-gradient(90deg, var(--star-background) var(--percent),
    var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const roundForStar = (num) => {
  const roundedToNearestQuarter = (Math.round(num * 4) / 4);

  if (roundedToNearestQuarter - Math.floor(roundedToNearestQuarter) === 0.75) {
    return (roundedToNearestQuarter - 0.075);
  } if (roundedToNearestQuarter - Math.floor(roundedToNearestQuarter) === 0.25) {
    return (roundedToNearestQuarter + 0.075);
  }
  return roundedToNearestQuarter;
};

function StarRating({ rating }) {
  const Label = styled.label`
    font: 1.0em 'Arial', sans-serif;
  `;

  return (
    <div>
      <Star size={25} className="Stars" style={{ '--rating': roundForStar(rating) }} />
    </div>
  );
}

export default StarRating;
