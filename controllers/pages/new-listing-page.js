const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('From new-listing-page file')
})

module.exports = router;