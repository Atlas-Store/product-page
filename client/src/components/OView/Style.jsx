/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const RoundedImageDiv = styled.div`
  border: 20px;

`;

const getFinalURL = (URLstr) => {
 if (URLstr.slice(0, -11).slice(-1) === "&") {
   return URLstr.slice(0, -11) + "w=273&q=80";
 } else if (URLstr.slice(0, -11).slice(-1) !== "&" && URLstr.slice(0, -11).slice(-1) !== "w") {
  return URLstr.slice(0, -11) + "&w=273&q=80";
 } else {
  return URLstr.slice(0, -11) + "=273&q=80";
 }
};

const Style = (props) => {
  const [test, setTest] = useState(false);

  const RoundedImage = styled.img`
  width: 80px;
  height: 80px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  border-color: gray;
  cursor: pointer;
  object-fit: cover;

  &:hover {
    border-color: black;
  }
`;

  const handleClick = () => {
    props.setCurrentImageURL(props.styleURL);
    if (props.styles.results[props.index] !== undefined) {
      props.setCurrentGroupOfImageURLs(props.styles.results.map((item) => item)[props.index]);
    }
    props.setCurrentStyleIndex(props.index);

    setTest(!test);
    props.handleClickStyle();
  };

  return (
    <RoundedImageDiv onClick={handleClick}>
      <RoundedImage loading="lazy" src={getFinalURL(props.styleURL) } alt="rounded image" />
    </RoundedImageDiv>
  );
};

export default Style;
