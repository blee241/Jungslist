const router = require('express').Router();
const homepage = require('./homepage');
const signupPage = require('./signup-page');
const searchPage = require('./search-page');
const sellerPage = require('./seller-page');
const newListingPage = require('./new-listing-page');
const api = require('./api');

<<<<<<< HEAD

// localhost:3001/p
=======
// localhost:3001/
>>>>>>> 36110abf41fff8ae568672eca447bda8afa33cc3
router.use('/', homepage);

// localhost:3001/sign-up
router.use('/sign-up', signupPage);

// localhost:3001/search
router.use('/search', searchPage);


// localhost:3001/sell
router.use('/sell', sellerPage);

// localhost:3001/new-listing
router.use('/new-listing', newListingPage);

router.use('/api', api);

module.exports = router;