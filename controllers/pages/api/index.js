const router = require('express').Router();
const userRoutes = require('./userRoutes');
const listRoute = require('./listingRoutes');
const searchRoutes = require('./searchRoutes');
router.use('/users', userRoutes);
router.use('/listing',listRoute);
router.use('/search', searchRoutes);

module.exports = router;
