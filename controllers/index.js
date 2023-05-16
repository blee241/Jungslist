const router = require('express').Router();
const homeroutes = require('./homeroutes');
const userRoutes = require('./users');

router.use('/api', userRoutes);
router.use('/', homeroutes)
module.exports = router;