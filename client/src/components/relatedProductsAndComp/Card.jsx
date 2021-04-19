import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border: 1px solid black;
  margin-right: 20px;
  width: 150px;
  height: 235px;
  img {
    display: block;
    object-fit: cover;
    width:150px;
    height:150px;
  };
  .icon {
    position: absolute;
    right: 0px;
    height: 25px;
    width: 25px;
  }

`;

function Card() {
  return (
    <Wrapper>
      <img className="icon" src="https://lh3.googleusercontent.com/proxy/qPOMuPKht-a5ZQxrXfD1yd5lE2RI_dI4HsZJfdBCtjGZcEOEeknTT5f_N_lgvLnW1D5rJT9qEDRUtJXxKSQ46h9GuBakRU2iR729BxbfE3Q7vRfh5Vt1M9eFf8zZ37XAu509olM5xk2phuv-7Lii" alt="star icon" />
      <img src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Forest Green & Black" />
      <span>JACKETS</span>
      <span>Forest Green & Black</span>
      <span>$140.00 </span>
      <span> ***** </span>
    </Wrapper>
  );
}
export default Card;
