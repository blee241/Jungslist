const router = require('express').Router();
// const { User } = require('../../models');

router.get('/', (req, res) => {
    res.json('From seller-page file')
})

module.exports = router;