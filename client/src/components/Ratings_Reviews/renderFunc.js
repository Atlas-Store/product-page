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

  calcAvg: (ratingStats) => {
    let divisor = 0;
    let totalRating = 0;
    for (const key in ratingStats) {
      totalRating += key * ratingStats[key];
      divisor += parseInt(ratingStats[key]);
    }
    return (Math.round((totalRating / divisor) * 10) / 10);
  },

  numRecommenders: (recommendedStats) => {
    const yes = recommendedStats.true;
    const no = recommendedStats.false;
    const percentRecommended = Math.round((yes / (yes + no)) * 100);
    return percentRecommended;
  },

  frequency: (starStats) => {
    const freqRatings = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
      divisor: 0,
    };
    for (const key in starStats) {
      freqRatings[key] = starStats[key];
      freqRatings['divisor'] += parseInt(starStats[key]);
    }
    return freqRatings;
  },

};
