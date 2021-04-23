const express = require('express');

const app = express();
const products = require('./helpers/productsAPI');
const reviews = require('./helpers/reviewsAPI');
const qa = require('./helpers/qaAPI');

app.use(express.static(`${__dirname}/client/dist`));

app.use(express.urlencoded({ extended: false }));

app.use('/products', products);
app.use('/reviews', reviews);
app.use('/qa', qa);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
