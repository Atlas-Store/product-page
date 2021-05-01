const express = require('express');

const router = express.Router();

const { getAPIdata } = require('./getAPIdata');
const { postQuestion } = require('./getAPIdata');

router.get('/questions/:product_id', (req, res) => {
  const endpoint = `qa/questions/?product_id=${req.params.product_id}`;
  getAPIdata(endpoint, (err, data) => {
    if (err) {
      res.status(400).send(err);
      res.end();
    } else {
      res.status(200).send(data);
    }
  });
});

router.post('/questions', (req, res) => {
  console.log('test server', req.body);
  postQuestion(req.body, (err) => {
    if (err) {
      console.log('error', err);
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
