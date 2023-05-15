const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('Hi thereee');
});

module.exports = router;