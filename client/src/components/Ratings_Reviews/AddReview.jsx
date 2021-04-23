import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Stars from '../OView/StarRating';

const WriteModal = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(248,248,255);
  padding: 50px;
  zIndex=1000;
  border: 2.5px solid black;
  width: fit-content;
  height: fit-content;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);

`;

const Close = styled.button`
  position: absolute;
  margin: 5px;
  background: transparent;
  border: none;
  top: 0;
  left: 0;
  &:hover {
    background: red;
  }
`;

const ReviewComponent = styled.div`
  margin: 56px;
`;

const SummaryInput = styled.input`
  background: rgb(248,248,255);
  border-bottom: 1.5px solid black;
  width: 200px;
`;

const AddReview = ({ open, onClose }) => {
  if (!open) return null;
  const [reviewStars, updateRStars] = useState(5);
  const [reviewSummary, updateSummary] = useState('');
  const [reviewBody, updateBody] = useState('');
  return ReactDOM.createPortal(
    <>
      <Overlay />
      <WriteModal>
        <ReviewComponent>
          WRITE A REVIEW
        </ReviewComponent>
        <ReviewComponent>
          <form>
            Would you recommend this product?
            <div>
              <input type="radio" id="Yes" name="Yes" value="Yes" checked />
              <label htmlFor="Yes"> Yes </label>
            </div>
            <div>
              <input type="radio" id="No" name="No" value="No" />
              <label htmlFor="No"> No </label>
            </div>
          </form>
        </ReviewComponent>
        <ReviewComponent>
          How would you rate this product?
          <form>
            <input type="range" name="rating" min="0" max="5" step="1" required onChange={(event) => updateRStars(event.target.value)} />
            <Stars rating={reviewStars} />
          </form>
        </ReviewComponent>
        <ReviewComponent>
          <form>
            Review Summary:
            <SummaryInput type="text" required value={reviewSummary} onChange={(event) => updateSummary(event.target.value)} placeHolder="Love it" maxLength="60" />
          </form>
        </ReviewComponent>
        <ReviewComponent>
          <form>
            Details:
            <SummaryInput type="text" required value={reviewBody} onChange={(event) => updateBody(event.target.value)} placeHolder="Best purchase ever!" maxLength="1000" />
          </form>
        </ReviewComponent>
        <Close type="button" onClick={onClose}> x </Close>
      </WriteModal>
    </>, document.getElementById('portal'),
  );
};

export default AddReview;
