const router = require('express').Router();
const { User } = require('../../models')

// router.get('/', (req, res) => {
//     res.json('From homepage file')
//     res.render('main', {});
// })

router.get('/', async (req, res) => {
    const userData = await User.findAll({
        attributes: [
            'email',
            'id'
        ]
    });
    console.log('Ugly sequelize data', userData);

    const prettyUserData = userData.map((user) => user.get({plain: true}));
    console.log('Pretty data yay!', prettyUserData);
    res.render('homepage', {prettyUserData});
})

module.exports = router;