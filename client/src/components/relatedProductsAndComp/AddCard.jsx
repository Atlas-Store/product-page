import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border: 1px solid transparent;
  margin-right: 20px;
  width: 170px;
  height: 275px;
  img {
    display: block;
    object-fit: cover;
    width: 100px;
    height: 100px;
    padding: 55px 25px 30px 35px;
  };
  .addOutfit {
    text-align: center;
  }
  :hover {
    border: 1px solid black;
  }
`;

function AddCard({currentProduct, setOutfits, outfits}) {
  const newOutfit = {};
  newOutfit[currentProduct] = 1;
  return (
    <Wrapper onClick={() => { setOutfits({ ...outfits, ...newOutfit }); }}>
      <img src="./addCard.png" alt="add item icon" />
      <span className="addOutfit">Add To Outfit</span>
    </Wrapper>
  );
}

AddCard.propTypes = {
  currentProduct: PropTypes.number.isRequired,
  setOutfits: PropTypes.func.isRequired,
  outfits: PropTypes.object.isRequired,
};

export default AddCard;
