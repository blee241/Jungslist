const router = require('express').Router();
const pages = require('./pages');
const listing = require('./pages/api/listingRoutes');
const signup = require('./pages/api/SignupRoutes');



//localhost:3001/
router.use("/", pages);



router.use('/listing', listing);
router.use('/signup', signup);




module.exports = router;
