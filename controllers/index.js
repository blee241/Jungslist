const router = require('express').Router();
const pages = require('./pages');
const listing = require('./listing/listing');



const apiRoutes = require('./api');


router.use('/api', apiRoutes);

// localhost:3001/
router.use('/', pages);

router.use('/listing', listing);





module.exports = router;