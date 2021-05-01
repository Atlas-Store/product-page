/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AddReview from './AddReview';
import Stars from '../OView/StarRating';
import BarRatings from './BarRatings';
import SizeComfort from './SizeComfort';
import ReviewTiles from './ReviewTiles';

const renderFunc = require('./renderFunc.js');

const RatingsSection = styled.div`
  padding-right: 24px;
`;
const StyledRRBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  font-family: Arial;
  overflow-x: scroll;
  width: 88vw;
`;

const StyledReviewSection = styled.div`
  width: 66vw;
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

const CustomH3 = styled.h3`
  margin-block-start: 0;
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
  flex-direction: row;
  align-items: center;
  background-color: #2ada71;
  padding-left: 72px;
`;

const RatingNum = styled.div`
  font-size: 36px;
  padding-left: 10px;
  color: black;
`;

const StyledOption = styled.option`
  font-family: 'Arial';
`;

const Review = ({ reviews, ratings, currentProduct }) => {
  const [numReviews, updateNumReviews] = useState(reviews.results.length);
  const [reviewsToShow, updateToShow] = useState(2);
  const [writeReview, toggleWR] = useState(false);
  const [reviewsToRender, updateReviewsRender] = useState(reviews.results);
  const [averageRating, setAvgRating] = useState(renderFunc.calcAvg(ratings.ratings));
  const [fracRecs, setFracRecs] = useState(renderFunc.numRecommenders(ratings.recommended));
  const [starFilterClicked, updateFilterClick] = useState(false);
  const [filterByStars, updateByStars] = useState(null);
  const productID = reviews.product;
  const grabSortedReviews = (byWhat) => {
    const sortBy = byWhat.toLowerCase();
    axios.get(`/reviews/${productID}/${sortBy}`)
      .then((results) => {
        updateReviewsRender(results.data.results);
      })
      .catch((error) => console.log(error));
  };
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
          <BarRatings
            starStats={ratings.ratings}
            updateByStars={updateByStars}
            updateFilterClick={updateFilterClick}
          />
          <SizeComfort ratings={ratings} />
          {starFilterClicked && (
          <StyledReviewButton type="submit" onClick={() => { updateFilterClick(false); updateToShow(2); }}>
            SHOW ALL
          </StyledReviewButton>
          )}
        </RatingsSection>
        <StyledReviewSection>
          <CustomH3>
            { reviews.results.length }
            {'  '}
            reviews sorted by
            <SortMenu onChange={(event) => {
              grabSortedReviews(event.target.value);
              updateToShow(2);
            }}
            >
              <StyledOption value="Helpful">Helpful</StyledOption>
              <StyledOption value="Newest">Newest</StyledOption>
              <StyledOption value="Relevant">Relevant</StyledOption>
            </SortMenu>
          </CustomH3>
          <div>
            {starFilterClicked && reviewsToRender.map((aReview) => {
              if (aReview.rating <= filterByStars) {
                return <ReviewTiles review={aReview} key={aReview.review_id} />;
              }
              return null;
            })}
            {!starFilterClicked && reviewsToRender.map((aReview) => (
              <ReviewTiles
                review={aReview}
                key={aReview.review_id}
              />
            )).slice(0, reviewsToShow)}
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
            <AddReview
              open={writeReview}
              onClose={() => { toggleWR(false); }}
              currentProduct={currentProduct}
            />
          </div>
        </StyledReviewSection>
      </StyledRRBox>
    </section>

  );
};

export default Review;
