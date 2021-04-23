/* eslint-disable no-param-reassign */
module.exports = {
  Helpful: (reviews) => (
    reviews.sort((a, b) => {
      const y = a.helpfulness;
      const z = b.helpfulness;
      return z - y;
    })
  ),
  Newest: (reviews) => (
    reviews.sort((a, b) => {
      const y = new Date(a.date);
      const z = new Date(b.date);
      return z - y;
    })

  ),

  calcAvg: (reviews) => {
    const allRatings = reviews.map((aReview) => aReview.rating);
    let totalRating = 0;
    allRatings.forEach((rating) => {
      totalRating += rating;
    });
    return totalRating / (allRatings.length);
  },

  numRecommenders: (reviews) => {
    const numRevs = reviews.length;
    let numRecs = 0;
    reviews.forEach((review) => {
      if (review.recommend) {
        numRecs += 1;
      }
    });
    const percentRecs = (numRecs / numRevs) * 100;
    return percentRecs;
  },

  frequency: (reviews) => {
    const freqRatings = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    };
    reviews.forEach((review) => {
      const currentRating = review.rating;
      if (currentRating === 5) {
        freqRatings['5'] += 1;
      }
      if (currentRating === 4) {
        freqRatings['4'] += 1;
      }
      if (currentRating === 3) {
        freqRatings['3'] += 1;
      }
      if (currentRating === 2) {
        freqRatings['2'] += 1;
      }
      if (currentRating === 1) {
        freqRatings['1'] += 1;
      }
    });
    return freqRatings;
  },

};
