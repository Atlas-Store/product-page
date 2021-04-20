import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import sampleReviews from './sampleReviews';
import ReviewBody from './ReviewBody';
import Helpful from './Helpful';
import AddReview from './AddReview';
import SortBy from './SortBy';
import ReviewPhotos from './ReviewPhotos';

const StyledRating = styled.div`
  min-width: fit-content;
  width: 2in;
  height: 2in;
`;
const StyledRRBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const StyledReviewSection = styled.div`
  width: 672px;
`;

const StyledReview = styled.div`
  border-bottom: 2.5px solid black;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const StyledReviewButton = styled.button`
  background-color: transparent;
  border: 2.5px solid black;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 10px;
`;

const ReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReviewUserDate = styled.span`
  display: flex;
  justify-content: flex-end;
`;

const ReviewResponse = styled.p`
  width: 432px;
  background-color: lightgrey;
`;

const UserName = styled.span`
  font-size: smaller;
  padding-right: 5px;
`;

const TimeOfReview = styled.span`
  font-size: smaller;
`;

const Review = () => {
  const reviewsSamp = sampleReviews.results.map((review) => (
    <StyledReview>
      <ReviewInfo>
        {review.rating}
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
        <ReviewPhotos images={review.photos} />
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
  ));

  // eslint-disable-next-line no-unused-vars
  const [numReviews, updateNumReviews] = useState(sampleReviews.results.length);
  const [reviewsToShow, updateToShow] = useState(2);
  const [writeReview, toggleWR] = useState(false);
  return (
    <section>
      <h5> RATINGS AND REVIEWS </h5>
      <StyledRRBox>
        {/* Need to change 'AND' to & */}
        <StyledRating>
          <h1>4.6</h1>
          <span>
            {numReviews}
            {' '}
            Reviews
          </span>
        </StyledRating>
        <StyledReviewSection>
          <h3>
            { sampleReviews.results.length }
            {'  '}
            reviews sorted by
            <SortBy />
          </h3>
          <div>
            {reviewsSamp.slice(0, reviewsToShow)}
          </div>
          <div id="writeRev">
            {(reviewsToShow < numReviews) && (
            <StyledReviewButton type="button" onClick={() => { updateToShow(reviewsToShow + 2); }}>
              MORE REVIEWS
            </StyledReviewButton>
            )}
            <StyledReviewButton type="button" onClick={() => { toggleWR(!writeReview); }}> ADD A REVIEW + </StyledReviewButton>
            {writeReview && <AddReview isOpen={writeReview} />}
          </div>
        </StyledReviewSection>
      </StyledRRBox>
    </section>

  );
};

export default Review;
