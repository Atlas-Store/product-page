import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Stars from '../OView/StarRating';
import ReviewBody from './ReviewBody';
import ReviewPhotos from './ReviewPhotos';
import Helpful from './Helpful';

const StyledReview = styled.div`
  border-bottom: 2.5px solid black;
  margin-top: 40px;
  margin-bottom: 40px;
  font-family: Arial;
`;

const ReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReviewUserDate = styled.span`
  display: flex;
  justify-content: flex-end;
`;

const UserName = styled.span`
  font-size: smaller;
  padding-right: 5px;
  font-family: Arial;
`;

const TimeOfReview = styled.span`
  font-size: smaller;
  font-family: Arial;
`;

const ReviewResponse = styled.p`
  width: 432px;
  background-color: lightgrey;
`;

const ReviewTiles = (props) => {
  // eslint-disable-next-line react/prop-types
  const { review } = props;
  return (
    <div>
      <StyledReview>
        <ReviewInfo>
          <Stars rating={review.rating} />
          <ReviewUserDate>
            <UserName>
              {review.reviewer_name}
              ,
            </UserName>
            <TimeOfReview>
              {moment(review.date).format('MMMM DD, YYYY')}
            </TimeOfReview>
          </ReviewUserDate>
        </ReviewInfo>
        <h4>
          {review.summary}
        </h4>
        <p>
          <ReviewBody body={review.body} />
        </p>
        {(review.photos.length > 0)
        && (
        <p>
          {review.photos.map((aPhoto) => <ReviewPhotos image={aPhoto.url} />)}
        </p>
        )}
        {review.recommend
          && <p> ✓ I recommend this product </p>}
        {review.response
          && (
          <div>
            <ReviewResponse>
              <h4>Response:</h4>
              {review.response}
            </ReviewResponse>
          </div>
          )}
        <p>
          <Helpful countYes={review.helpfulness} />
        </p>
      </StyledReview>
    </div>
  );
};

export default ReviewTiles;
