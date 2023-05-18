const router = require('express').Router();
const userRoutes = require('./userRoutes');
const listRoute = require('./listingRoutes');
router.use('/users', userRoutes);
router.use('/listing',listRoute);

module.exports = router;
