const router = require('express').Router();
const pages = require('./pages');
const listing = require('./pages/api/listingRoutes');




//localhost:3001/
router.use("/", pages);





router.use('/listing', listing);





module.exports = router;
