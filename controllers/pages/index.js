const router = require('express').Router();
// const homepage = require('./homepage');
const sellerPage = require('./seller-page');

// localhost:3001/pages
router.use('/', sellerPage)

router.get('/', (req, res) => {
    res.json('From index.js file')
})

module.exports = router;