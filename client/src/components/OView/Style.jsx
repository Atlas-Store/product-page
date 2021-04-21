import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const RoundedImageDiv = styled.div`
  border: 20px;

`

// const widthABC = 80;
// const heightABC = 80;

// width: ${widthABC}px;
// height: ${heightABC}px;


const Style = (props) => {
  const [clicked, setClicked] = useState(false);
  // const [isCurrentlyHovering, setIsCurrentlyHovering] = useState(false);

  const RoundedImage = styled.img`
  width: 80px;
  height: 80px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  border-style: solid;
  border-width: thin;
  border-color: gray;
  cursor: pointer;
  object-fit: cover;

  &:hover {
    width: 100px;
    height: 100px;
    border-width: medium;
  }
`

// const RoundedImageBigger = styled.img`
//   width: 100px;
//   height: 100px;
//   position: relative;
//   overflow: hidden;
//   border-radius: 50%;
//   border-style: solid;
//   border-width: thin;
//   border-color: gray;
//   cursor: pointer;
//   // &:hover {
//   //   width: 100px;
//   //   height: 100px;
//   // }
// `

  const handleClick = () => {
    props.setCurrentImageURL(props.styleURL);
    // setClicked(true);
  }

  const handleMouseEnter = () => {

  }
  // let style = {
  //   width: isCurrentlyHovering ? 100px : 80px;
  //   height: isCurrentlyHovering ? 100px : 80px;
  // }
  // console.log('style URL is', props.styleURL);
  return (

    // <select>Select Size</select>
    <RoundedImageDiv onClick={handleClick} onMouseEnter={handleMouseEnter}>

      {/* {clicked ?
      <RoundedImageBigger src={props.styleURL} /> :
      <RoundedImage src={props.styleURL} /> } */}
      <RoundedImage src={props.styleURL} />
    </RoundedImageDiv>
  )
}

export default Style;