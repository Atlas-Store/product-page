const axios = require('axios');
const config = require('../config.js');

const getAPIdata = (endpoint, callback) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/${endpoint}`,
    headers: {
      'User-Agent': 'request',
      Authorization: config.TOKEN,
    },
  };

  axios.get(options.url, { headers: options.headers })
    .then((res) => {
      callback(null, res.data);
    })
    .catch((err) => {
      callback(err);
    });
};

const postQuestion = (data, callback) => {
  const options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions',
    headers: {
      'User-Agent': 'request',
      Authorization: config.TOKEN,
    },
  };

  axios.post(options.url, { headers: options.headers })
    .then(() => {
      callback(null);
    })
    .catch((err) => {
      console.log('error at post req', err);
      callback(err);
    });
};

module.exports.getAPIdata = getAPIdata;
module.exports.postQuestion = postQuestion;
