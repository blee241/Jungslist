const router = require('express').Router();
const { User } = require('../../models');

router.post('/users', async (req, res) => {
    try {
        const newUser = await User.create({
            customerName: req.body.customerName,
            password: req.body.password,
            email: req.body.email
        })
        req.session.save(() => {
            req.session.userId = newUser.id;
            req.session.username = newUser.username;
            req.session.loggedIn = true;

            res.json(newUser);
        })
    } catch (error) {
        res.status(500).json(error)
    }
});



module.exports = router;

