import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from '../Reviews';

const sampleReviews = {
  product: '23146',
  page: 0,
  count: 5,
  results: [
    {
      review_id: 308889,
      rating: 3,
      summary: "I'm enjoying wearing these shades",
      recommend: true,
      response: '',
      body: 'Comfortable and practical.',
      date: '2019-04-14T00:00:00.000Z',
      reviewer_name: 'shortandsweeet',
      helpfulness: 10,
      photos: [
        {
          id: 536115,
          url: 'https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
        },
        {
          id: 536116,
          url: 'https://images.unsplash.com/photo-1561693532-9ff59442a7db?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
        },
        {
          id: 536117,
          url: 'https://images.unsplash.com/photo-1487349384428-12b47aca925e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 308887,
      rating: 4,
      summary: 'I am liking these glasses',
      recommend: true,
      response: "Glad you're enjoying the product!",
      body: "They are very dark. But that's good because I'm in very sunny spots",
      date: '2019-06-23T00:00:00.000Z',
      reviewer_name: 'bigbrotherbenjamin',
      helpfulness: 6,
      photos: [
        {
          id: 536115,
          url: 'https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
        },
        {
          id: 536116,
          url: 'https://images.unsplash.com/photo-1561693532-9ff59442a7db?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
        },
        {
          id: 536117,
          url: 'https://images.unsplash.com/photo-1487349384428-12b47aca925e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 308891,
      rating: 2,
      summary: 'This product was ok!',
      recommend: false,
      response: '',
      body: "They're fine but I wouldn't buy again.",
      date: '2019-05-23T00:00:00.000Z',
      reviewer_name: 'anyone',
      helpfulness: 2,
      photos: [],
    },
    {
      review_id: 308890,
      rating: 5,
      summary: "I'm not a fan!",
      recommend: false,
      response: "Sorry to hear. Is there anything in particular you don't like?",
      body: "I don't like them",
      date: '2019-06-16T00:00:00.000Z',
      reviewer_name: 'negativity',
      helpfulness: 2,
      photos: [],
    },
    {
      review_id: 308888,
      rating: 4,
      summary: 'They look good on me',
      recommend: true,
      response: '',
      body: 'I so stylish and just my aesthetic.',
      date: '2019-03-12T00:00:00.000Z',
      reviewer_name: 'fashionperson',
      helpfulness: 1,
      photos: [],
    },
  ],
};

const ratings = {
  product_id: '23419',
  ratings: {
    1: '5',
    2: '5',
    3: '8',
    4: '6',
    5: '5',
  },
  recommended: {
    false: '5',
    true: '24',
  },
  characteristics: {
    Quality: {
      id: 78607,
      value: '3.4827586206896552',
    },
  },
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reviews reviews={sampleReviews} ratings={ratings} />, div);
});
