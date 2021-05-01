const axios = require('axios');
const config = require('../config.js');

const PostReview = (endpointMeta, endpointPost, data, callback) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/${endpointPost}`,
    headers: {
      'User-Agent': 'request',
      Authorization: config.TOKEN,
    },
  };
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/${endpointMeta}`, { headers: options.headers })
    .then(() => {
      // const productChars = response.data.characteristics;
      // for (let char in productChars ) {
      //   productChars[char]['value'] = parseInt(data.characteristics[char]['value']);
      // }
      // data.characteristics = productChars;
      // console.log(data);
      axios.post(options.url, data, { headers: options.headers })
        .then(() => {
          callback(null);
        });
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports.PostReview = PostReview;
