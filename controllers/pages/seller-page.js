const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('From seller-page file')
})

module.exports = router;