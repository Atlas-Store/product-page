/* eslint-disable no-param-reassign */
module.exports = {
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
    const yes = recommendedStats.true ? recommendedStats.true : 0;
    const no = recommendedStats.false ? recommendedStats.false : 0;
    const divisor = parseInt(yes, 10) + parseInt(no, 10);
    const percentRecommended = Math.round((parseInt(yes, 10) / divisor) * 100);
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
      freqRatings[key] =parseInt(starStats[key]);
      freqRatings.divisor += parseInt(starStats[key]);
    }
    return freqRatings;
  },

};
