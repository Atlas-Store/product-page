/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import sampleReviews from './sampleReviews';
import ReviewBody from './ReviewBody';
import Helpful from './Helpful';
import AddReview from './AddReview';
import ReviewPhotos from './ReviewPhotos';
import Stars from '../OView/StarRating';
import BarRatings from './BarRatings';
import SizeComfort from './SizeComfort';

const renderFunc = require('./renderFunc.js');

const RatingsSection = styled.div`
  padding-right: 48px;
`;
const StyledRRBox = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  flex-direction: row;
  font-family: Arial;
`;

const StyledReviewSection = styled.div`
  width: 672px;
`;

const StyledReview = styled.div`
  border-bottom: 2.5px solid black;
  margin-top: 40px;
  margin-bottom: 40px;
  font-family: Arial;
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
  font-family: Arial;
`;

const TimeOfReview = styled.span`
  font-size: smaller;
  font-family: Arial;
`;

const SortMenu = styled.select`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: .85em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`;

const FractionRecs = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const StarsContent = styled.div`
  display: flex;
  padding-left: 36px;
  align-items: center;
  background-color: black;
`;

const RatingNum = styled.div`
  font-size: 36px;
  padding-left: 10px;
  color: rgb(211, 211, 211);
`;

const Review = () => {
  const [numReviews, updateNumReviews] = useState(sampleReviews.results.length);
  const [reviewsToShow, updateToShow] = useState(2);
  const [writeReview, toggleWR] = useState(false);
  const [sort, updateSort] = useState('Helpful');
  const averageRating = renderFunc.calcAvg(sampleReviews.results);
  const fracRecs = renderFunc.numRecommenders(sampleReviews.results);
  let sortedReviews;

  const reviewsSamp = (input) => (input.map((review) => (
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
  )));
  const [reviewsToRender, updateReviewsRender] = useState(reviewsSamp(sampleReviews.results));

  // if (sort === 'Helpful') {
  //   sortedReviews = renderFunc.sortByHelpful(sampleReviews.results);
  //   updateReviewsRender(reviewsSamp(sortedReviews));
  // }
  // eslint-disable-next-line no-unused-vars

  return (
    <section>
      <h2>
        RATINGS
        {' & '}
        REVIEWS
      </h2>
      <StyledRRBox>
        {/* Need to change 'AND' to & */}
        <RatingsSection>
          <StarsContent>
            <Stars rating={averageRating} />
            <RatingNum>
              <strong>
                {averageRating}
              </strong>
            </RatingNum>
          </StarsContent>
          <FractionRecs>
            {fracRecs}
            % reviewers recommend this product
          </FractionRecs>
          <BarRatings reviews={sampleReviews.results} />
          <SizeComfort />
        </RatingsSection>
        <StyledReviewSection>
          <h3>
            { sampleReviews.results.length }
            {'  '}
            reviews sorted by
            <SortMenu onChange={(event) => {
              // eslint-disable-next-line max-len
              updateSort(event.target.value); sortedReviews = renderFunc.sortByTime(sampleReviews.results);
              updateReviewsRender(reviewsSamp(sortedReviews));
            }}
            >
              <option value="Helpful" selected> Helpful </option>
              <option value="Newest">  Newest  </option>
              <option value="Relevant">  Relevant  </option>
            </SortMenu>
          </h3>
          <div>
            {reviewsToRender.slice(0, reviewsToShow)}
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
