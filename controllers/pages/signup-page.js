const router = require('express').Router();
const { User } = require('../../models');

/*
router.get('/', (req, res) => {
    res.json('From signup-page file')
})
*/

 router.get('/', async (req, res) => {
    const userData = await User.findAll({
        attributes: [
            'email',
            'id',
            'user_password',
            'buyer_location'
        ]
    });
    console.log('Ugly sequelize data', userData);

    const prettyUserData = userData.map((user) => user.get({plain: true}));
    console.log('Pretty data yay!', prettyUserData);
    res.render('signup-page', {prettyUserData});
})

 router.post("/sign-up", async (req, res) => {
    const { email, user_password, buyer_location } = req.body;
    const userData = await User.create({
        email: email,
        user_password: pw,
        buyer_location: locationEl,
    });
    res.json(userData);
})  

module.exports = router;