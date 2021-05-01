const express = require('express');

const router = express.Router();

const { getAPIdata } = require('./getAPIdata');

const { PostReview } = require('./PostReview');

router.get('/meta/:product_id', (req, res) => {
  const endpoint = `reviews/meta/?product_id=${req.params.product_id}`;
  getAPIdata(endpoint, (err, data) => {
    if (err) {
      res.status(400).send(err);
      res.end();
    } else {
      res.status(200).send(data);
    }
  });
});

router.get('/:product_id', (req, res) => {
  const endpoint = `reviews/?product_id=${req.params.product_id}&count=15`;
  getAPIdata(endpoint, (err, data) => {
    if (err) {
      res.status(400).send(err);
      res.end();
    } else {
      res.status(200).send(data);
    }
  });
});

router.get('/:product_id/:sort', (req, res) => {
  const endpoint = `reviews/?product_id=${req.params.product_id}&sort=${req.params.sort}&count=15`;
  getAPIdata(endpoint, (err, data) => {
    if (err) {
      res.status(400).send(err);
      res.end();
    } else {
      res.status(200).send(data);
    }
  });
});

router.post('/', (req, res) => {
  const data = req.body;
  const endpointPost = 'reviews';
  const endpointMeta = `reviews/meta/?product_id=${data.product_id}`;
  PostReview(endpointMeta, endpointPost, data, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send('ALL DONE POSTED REVIEW!');
    }
  });
});

module.exports = router;
