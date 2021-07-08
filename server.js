const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const products = require('./helpers/productsAPI');
const reviews = require('./helpers/reviewsAPI');
const qa = require('./helpers/qaAPI');
// const PORT = 3500;
// const https = require('https');
// const fs = require('fs');

// const options = {
//   key: fs.readFileSync('./localhost-key.pem'),
//   cert: fs.readFileSync('./localhost.pem'),
// };
// https.createServer(options, function (req, res) {
    // server code
    app.use(express.static(`${__dirname}/client/dist`));

    // app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: false }));

    app.use('/products', products);
    app.use('/reviews', reviews);
    app.use('/qa', qa);

    app.listen(3000, () => {
      // eslint-disable-next-line no-console
      console.log('listening on port 3000');
    });
  // }).listen(PORT, () => {
  //   console.log('listening on port 3500 with HTTPS');
  // });





