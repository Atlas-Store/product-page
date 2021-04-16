const express = require('express');

const app = express();
const { getAPIdata } = require('./helpers/api.js');

app.use(express.static(`${__dirname}/client/dist`));

app.use(express.urlencoded({ extended: false }));

app.get('/*', (req, res) => {
  getAPIdata((err, data) => {
    if (err) {
      res.status(400).send(err);
      res.end();
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
