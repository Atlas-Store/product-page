import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const RoundedImageDiv = styled.div`
  border: 20px;

`;
const Style = (props) => {
  const [clicked, setClicked] = useState(false);

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
    // width: 100px;
    // height: 100px;
    // border-width: medium;
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
    console.log('props.index is', props.index);
    console.log('props.handleClickStyle is', props.handleClickStyle);
    props.handleClickStyle();
  };

  const handleMouseEnter = () => {

  };
  return (

    <RoundedImageDiv onClick={handleClick} onMouseEnter={handleMouseEnter}>

      <RoundedImage src={props.styleURL} />
    </RoundedImageDiv>
  );
};

export default Style;
