import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border: 1px solid transparent;
  margin-right: 20px;
  width: 150px;
  height: 235px;
  img {
    display: block;
    object-fit: cover;
    width: 100px;
    height: 100px;
    padding: 40px 25px 30px 25px;
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
      <img src="https://icons-for-free.com/iconfiles/png/512/circle+create+new+plus+sign+icon-1320085936892806512.png" alt="add item icon" />
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
