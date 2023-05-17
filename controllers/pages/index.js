const router = require('express').Router();
const homepage = require('./homepage');
const signupPage = require('./signup-page');
const searchPage = require('./search-page');
const sellerPage = require('./seller-page');
const newListingPage = require('./new-listing-page');


// localhost:3001/p
router.use('/', homepage);

// localhost:3001/sign-up
router.use('/sign-up', signupPage);

// localhost:3001/search
router.use('/search', searchPage);


// localhost:3001/sell
router.use('/sell', sellerPage);

// localhost:3001/new-listing
router.use('/new-listing', newListingPage);


module.exports = router;