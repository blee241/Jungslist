const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('From signup-page file')
})

module.exports = router;