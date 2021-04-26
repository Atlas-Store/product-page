const express = require('express');

const router = express.Router();

const { getAPIdata } = require('./getAPIdata');

router.get('/', (req, res) => {
  const endpoint = 'products';
  getAPIdata(endpoint, (err, data) => {
    if (err) {
      res.status(400).send(err);
      res.end();
    } else {
      res.status(200).send(data);
    }
  });
});

router.get('/:product_id/styles', (req, res) => {
  const endpoint = `products/${req.params.product_id}/styles`;
  getAPIdata(endpoint, (err, data) => {
    if (err) {
      res.status(400).send(err);
      res.end();
    } else {
      res.status(200).send(data);
    }
  });
});

router.get('/:product_id/related', (req, res) => {
  const endpoint = `products/${req.params.product_id}/related`;
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
  const endpoint = `products/${req.params.product_id}`;
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
