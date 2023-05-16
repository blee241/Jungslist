const router = require('express').Router();
const pages = require('./pages');

const apiRoutes = require('./api');


router.use('/api', apiRoutes);

// localhost:3001/
router.use('/', pages);

module.exports = router;