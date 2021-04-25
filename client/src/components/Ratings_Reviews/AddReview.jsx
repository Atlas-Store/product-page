import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Stars from '../OView/StarRating';

const WriteModal = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(248,248,255);
  padding: 50px;
  zIndex=1000;
  border: 2.5px solid black;
  width: fit-content;
  height: 75%;
  font-family: Arial;
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

const Title = styled.h2`
  padding: 10px;
`;

const ReviewComponent = styled.div`
  margin-top: 28px;
  margin-bottom: 28px;
  margin-right: 56px;
`;

const SummaryInput = styled.input`
  background: rgb(248,248,255);
  border: none;
  width: 2in;
`;

const UserInput = styled.input`
  background: rgb(248,248,255);
  border: none;
`;

const SubmitButton = styled.button`
  position: absolute;
  margin: 5px;
  background: transparent;
  border: none;
  bottom: 10%;
  right: 10%;
  &:hover {
    background: lightgreen;
    padding: 5px;
  }
`;
const starCategory = {
  1: 'Poor',
  2: 'Fair',
  3: 'Average',
  4: 'Good',
  5: 'Great',
};
const AddReview = ({ open, onClose, currentProduct }) => {
  if (!open) return null;
  const [reviewStars, updateRStars] = useState(5);
  const [reviewSummary, updateSummary] = useState('');
  const [reviewBody, updateBody] = useState('');
  const [userName, updateUserName] = useState('');
  const [email, updateEmail] = useState('');
  return ReactDOM.createPortal(
    <>
      <Overlay />
      <WriteModal>
        <Title>
          WRITE YOUR REVIEW
          <div><u>{currentProduct.name}</u></div>
        </Title>
        <ReviewComponent>
          <form>
            Would you recommend this product?
            <div>
              <input type="radio" name="recommend" value="Yes" checked />
              <label for="Yes"> Yes </label>
            </div>
            <div>
              <input type="radio" name="recommend" value="No" />
              <label for="No"> No </label>
            </div>
          </form>
        </ReviewComponent>
        <ReviewComponent>
          How would you rate this product?
          <form>
            <input type="range" name="rating" min="1" max="5" step="1" required onChange={(event) => updateRStars(event.target.value)} />
            <Stars rating={reviewStars} />
            <div>{starCategory[reviewStars]}</div>
          </form>
        </ReviewComponent>
        <ReviewComponent>
          <form>
            <div>Review Summary:</div>
            {' '}
            <SummaryInput type="text" required value={reviewSummary} onChange={(event) => updateSummary(event.target.value)} placeholder="Love it" maxLength="60" />
          </form>
        </ReviewComponent>
        <ReviewComponent>
          <form>
            <div>Details:</div>
            {' '}
            <SummaryInput type="text" required value={reviewBody} onChange={(event) => updateBody(event.target.value)} placeholder="Best purchase ever!" maxLength="1000" minLength="50" />
          </form>
        </ReviewComponent>
        <ReviewComponent>
          <form>
            <div>Username:</div>
            {' '}
            <UserInput type="text" required value={userName} onChange={(event) => updateUserName(event.target.value)} placeholder="Username" maxLength="60" />
          </form>
        </ReviewComponent>
        <ReviewComponent>
          <form>
            <div>Email:</div>
            {' '}
            <UserInput type="text" required value={email} onChange={(event) => updateEmail(event.target.value)} placeholder="Email" maxLength="250" />
          </form>
        </ReviewComponent>
        <Close type="button" onClick={onClose}>
          <strong>
            <u>
              x
            </u>
          </strong>
        </Close>
        <SubmitButton type="button" onClick={onClose}>
          <strong>
            <u>
              SUBMIT
            </u>
          </strong>
        </SubmitButton>
      </WriteModal>
    </>, document.getElementById('portal'),
  );
};

export default AddReview;
