const router = require('express').Router();
const { User } = require('../../../models');

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        console.log(userData);
        if (!userData) {
            res
                .status(400)
                .json({ message: 'User not found' });
            return;
        }


        res.json({ user: userData, message: 'You are now logged in!' });
    } catch (err) {
        res.status(400).json(err);
    }
});
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;