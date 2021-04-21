/* eslint-disable no-param-reassign */
module.exports = {
  sortByHelpful: (reviews) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < reviews.length; i++) {
      let highest = i;
      // eslint-disable-next-line no-plusplus
      for (let j = i + 1; j < reviews.length; j++) {
        if (reviews[j].helpfulness > reviews[highest].helpfulness) {
          highest = j;
        }
      }
      const temp = reviews[i];
      reviews[i] = reviews[highest];
      reviews[highest] = temp;
    }
    return reviews;
  },
  sortByTime: (reviews) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < reviews.length; i++) {
      let highest = i;
      const dateI = new Date(reviews[highest].date);
      // eslint-disable-next-line no-plusplus
      for (let j = i + 1; j < reviews.length; j++) {
        const dateJ = new Date(reviews[j].date);
        if (dateJ > dateI) {
          highest = j;
        }
      }
      const temp = reviews[i];
      reviews[i] = reviews[highest];
      reviews[highest] = temp;
    }
    return reviews;
  },
};
