const express = require('express');

const router = express.Router();

const { getAPIdata } = require('./getAPIdata');

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
  const endpoint = `reviews/?product_id=${req.params.product_id}`;
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
  const endpoint = `reviews/?product_id=${req.params.product_id}&sort=${req.params.sort}`;
  getAPIdata(endpoint, (err, data) => {
    if (err) {
      res.status(400).send(err);
      res.end();
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
