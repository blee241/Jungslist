const router = require('express').Router();
const userRoutes = require('./userRoutes');
const listRoute = require('./listingRoutes');
const signupRoutes = require('./SignupRoutes');
router.use('/users', userRoutes);
router.use('/listing',listRoute);
router.use('/signup', signupRoutes);
module.exports = router;
