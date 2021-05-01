/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import Stars from '../OView/StarRating';

import SizeFeedback from './AddRevComponents/SizeFeedback';
import WidthFeedback from './AddRevComponents/WidthFeedback';
import ComfortFeedback from './AddRevComponents/ComfortFeedback';
import QualityFeedback from './AddRevComponents/QualityFeedback';
import FitFeedback from './AddRevComponents/FitFeedback';
import LengthFeedback from './AddRevComponents/LengthFeedback';

const WriteModal = styled.div`
  overflow-y: scroll;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(248,248,255);
  padding: 50px;
  zIndex=1000;
  border: 2.5px solid black;
  width: 50%;
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

const ClickableReview = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: rgb(248,248,255);
  border-bottom: 3.5px solid black
`;

const Feedback = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  background: rgb(248,248,255);
  border-bottom: 3.5px solid black
`;
const Title = styled.h2`
  padding: 10px;
  text-align: center;
`;

const ReviewComponent = styled.div`
  margin-top: 28px;
  margin-bottom: 28px;
  margin-right: 56px;

`;
const UserReviewComponent = styled.div`
  margin-top: 28px;
  margin-bottom: 28px;
  margin-left: 56px;
  width: 40%;
`;

const SummaryInput = styled.textarea`
  background: rgb(248,248,255);
  font-family: Arial;
  border: none;
  width: 2in;
  height: fit-content;
`;

const UserInput = styled.textarea`
  background: rgb(248,248,255);
  border: none;
  width: 2in;
  height: fit-content;
  font-family: Arial;
`;

const SubmitButton = styled.button`
  margin: 5px;
  background: transparent;
  border: none;
  font-size: larger;
  &:hover {
    background: lightgreen;
    padding: 5px;
  }
`;

const SubmitDiv = styled.div`
  text-align: center;
`;

const starCategory = {
  1: 'Poor',
  2: 'Fair',
  3: 'Average',
  4: 'Good',
  5: 'Great!',
};

const productChars = {
  Size: {
    id: 14,
    value: 0,
  },
  Width: {
    id: 15,
    value: 0,
  },
  Quality: {
    id: 16,
    value: 0,
  },
  Comfort: {
    id: 17,
    value: 0,
  },
  Length: {
    id: 18,
    value: 0,
  },
  Fit: {
    id: 19,
    value: 0,
  },
};

const AddReview = ({ open, onClose, currentProduct }) => {
  if (!open) return null;
  // const [inputs, updateInputs] = useState({});
  const [reviewStars, updateRStars] = useState(5);
  const [didRecommend, updateRec] = useState(null);
  const [sizeFeedback, updateSizeF] = useState(0);
  const [widthFeedback, updateWidthF] = useState(0);
  const [comfortFeedback, updateComfortF] = useState(0);
  const [qualityFeedback, updateQualityF] = useState(0);
  const [fitFeedback, updateFitF] = useState(0);
  const [lengthFeedback, updateLengthF] = useState(0);
  const [reviewSummary, updateSummary] = useState('');
  const [reviewBody, updateBody] = useState('');
  const [userName, updateUserName] = useState('');
  const [email, updateEmail] = useState('');
  const [images, updateImages] = useState([]);
  const [characteristics, updateChars] = useState(productChars);

  const postReview = (event) => {
    event.preventDefault();
    const data = {
      product_id: currentProduct.id,
      rating: reviewStars,
      summary: reviewSummary,
      body: reviewBody,
      recommend: didRecommend,
      name: userName,
      email,
      photos: images,
      characteristics,
    };
    axios.post('/reviews', data)
      .then(() => {
        console.log('Upload successful!');
      })
      .catch((error) => {
        console.log('Failed to Post', error);
      });
  };

  return ReactDOM.createPortal(
    <>
      <Overlay />
      <WriteModal>
        <Title>
          WRITE YOUR REVIEW:
          {' '}
          <span><u>{currentProduct.name}</u></span>
        </Title>
        <form>
          <ClickableReview>
            <ReviewComponent>
              <h4>*Would you recommend this product?</h4>
              <div>
                <input type="radio" name="recommend" value="Yes" required onClick={() => updateRec(true)} />
                <label htmlFor="Yes"> Yes </label>
              </div>
              <div>
                <input type="radio" name="recommend" value="No" onClick={() => updateRec(false)} />
                <label htmlFor="No"> No </label>
              </div>
            </ReviewComponent>
            <ReviewComponent>
              <h4>*How would you rate this product?</h4>
              <div>{starCategory[reviewStars]}</div>
              <input type="range" name="rating" min="1" max="5" step="1" required onChange={(event) => updateRStars(event.target.value)} />
              <Stars rating={reviewStars} />
            </ReviewComponent>
            <ReviewComponent>
              <SizeFeedback
                sizeFeedback={sizeFeedback}
                updateSizeF={updateSizeF}
                characteristics={characteristics}
                updateChars={updateChars}
              />
            </ReviewComponent>
            <ReviewComponent>
              <WidthFeedback
                widthFeedback={widthFeedback}
                updateWidthF={updateWidthF}
                characteristics={characteristics}
                updateChars={updateChars}
              />
            </ReviewComponent>
            <ReviewComponent>
              <ComfortFeedback
                comfortFeedback={comfortFeedback}
                updateComfortF={updateComfortF}
                characteristics={characteristics}
                updateChars={updateChars}
              />
            </ReviewComponent>
            <ReviewComponent>
              <QualityFeedback
                qualityFeedback={qualityFeedback}
                updateQualityF={updateQualityF}
                characteristics={characteristics}
                updateChars={updateChars}
              />
            </ReviewComponent>
            <ReviewComponent>
              <FitFeedback
                fitFeedback={fitFeedback}
                updateFitF={updateFitF}
                characteristics={characteristics}
                updateChars={updateChars}
              />
            </ReviewComponent>
            <ReviewComponent>
              <LengthFeedback
                lengthFeedback={lengthFeedback}
                updateLengthF={updateLengthF}
                characteristics={characteristics}
                updateChars={updateChars}
              />
            </ReviewComponent>
          </ClickableReview>
          <Feedback>
            <UserReviewComponent>
              <h4>Review Summary:</h4>
              {' '}
              <SummaryInput type="text" value={reviewSummary} onChange={(event) => updateSummary(event.target.value)} placeholder="Love it" maxLength="60" />
            </UserReviewComponent>
            <UserReviewComponent>
              <h4>*Details:</h4>
              {' '}
              <SummaryInput type="text" required value={reviewBody} onChange={(event) => updateBody(event.target.value)} placeholder="Best purchase ever!" maxLength="1000" minLength="50" />
            </UserReviewComponent>
            <UserReviewComponent>
              <h4>*Username:</h4>
              {' '}
              <UserInput type="text" required value={userName} onChange={(event) => updateUserName(event.target.value)} placeholder="Username" minlength="10" maxLength="60" />
            </UserReviewComponent>
            <UserReviewComponent>
              <h4>*Email:</h4>
              {' '}
              <UserInput type="text" required value={email} onChange={(event) => updateEmail(event.target.value)} placeholder="Email" minlength="10" maxLength="250" />
            </UserReviewComponent>
            <UserReviewComponent>
              <h4>Images: (Max 5) </h4>
              {' '}
              {images.length < 5 && (
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                onChange={(e) => updateImages((oldImages) => [...oldImages, e.target.files[0]])}
              />
              )}
              <div>
                {images.length}
                {' '}
                added
              </div>
            </UserReviewComponent>
          </Feedback>
          <SubmitDiv>
            <SubmitButton type="submit" onClick={(event) => postReview(event)}>
              <strong>
                <u>
                  SUBMIT
                </u>
              </strong>
            </SubmitButton>
          </SubmitDiv>
        </form>
        <Close type="button" onClick={onClose}>
          <strong>
            <u>
              x
            </u>
          </strong>
        </Close>

      </WriteModal>
    </>, document.getElementById('portal'),
  );
};

export default AddReview;
