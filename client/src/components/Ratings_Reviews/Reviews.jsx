/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import styled from 'styled-components';
import sampleReviews from './sampleReviews';
import AddReview from './AddReview';
import Stars from '../OView/StarRating';
import BarRatings from './BarRatings';
import SizeComfort from './SizeComfort';
import ReviewTiles from './ReviewTiles';

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
  color: #FFF;
`;

const StyledOption = styled.option`
  font-family: 'Arial';
`;

const Review = ({ reviews, ratings }) => {
  const [numReviews, updateNumReviews] = useState(sampleReviews.results.length);
  const [reviewsToShow, updateToShow] = useState(2);
  const [writeReview, toggleWR] = useState(false);
  const [sort, updateSort] = useState('Helpful');
  const [reviewsToRender, updateReviewsRender] = useState(reviews.results);
  const [averageRating, setAvgRating] = useState(renderFunc.calcAvg(ratings.ratings));
  const [fracRecs, setFracRecs] = useState(renderFunc.numRecommenders(ratings.recommended));

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
          <BarRatings starStats={ratings.ratings} />
          <SizeComfort />
        </RatingsSection>
        <StyledReviewSection>
          <h3>
            { reviews.results.length }
            {'  '}
            reviews sorted by
            <SortMenu onChange={(event) => {
              updateSort(event.target.value);
              updateReviewsRender(renderFunc[sort](sampleReviews.results));
            }}
            >
              <StyledOption value="Helpful" selected>Helpful</StyledOption>
              <StyledOption value="Newest">Newest</StyledOption>
              <StyledOption value="Relevant">Relevant</StyledOption>
            </SortMenu>
          </h3>
          <div>
            {reviewsToRender.map((aReview) => <ReviewTiles review={aReview} />)}
          </div>
          <div id="writeRev">
            {(reviewsToShow < numReviews) && (
            <StyledReviewButton type="button" onClick={() => { updateToShow(reviewsToShow + 2); }}>
              MORE REVIEWS
            </StyledReviewButton>
            )}
            <StyledReviewButton type="button" onClick={() => { toggleWR(true); }}>
              ADD A REVIEW +
            </StyledReviewButton>
            <AddReview open={writeReview} onClose={() => { toggleWR(false); }} />
          </div>
        </StyledReviewSection>
      </StyledRRBox>
    </section>

  );
};

export default Review;
