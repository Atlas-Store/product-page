const axios = require('axios');
const config = require('../config.js');

const PostReview = (endpointMeta, endpointPost, data, callback) => {
  const postReviewData = data;
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/${endpointPost}`,
    headers: {
      'User-Agent': 'request',
      Authorization: config.TOKEN,
    },
  };
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/${endpointMeta}`, { headers: options.headers })
    .then((response) => {
      const productChars = response.data.characteristics;
      const characteristicsData = {};
      for (const char in productChars) {
        const { id } = productChars[char];
        characteristicsData[id] = parseInt(postReviewData.characteristics[char].value);
      }
      postReviewData.characteristics = characteristicsData;
      axios.post(options.url, postReviewData, { headers: options.headers })
        .then(() => {
          callback(null);
        });
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports.PostReview = PostReview;
