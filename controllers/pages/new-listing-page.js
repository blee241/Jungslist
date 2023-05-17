const router = require('express').Router();
const { Listing } = require('../../models');

// router.get('/', (req, res) => {
//     res.json('From new-listing-page file')
// })

router.get('/', async (req, res) => {
    const listData = await Listing.findAll({
        attributes: [
            'product_name',
            'category',
            'product_condition',
            'quantity',
            'price',
            'brand',
            'description',
            'seller_location'

        ]
    });
    console.log("this is the ugly data!!!", listData);

    const prettyList = listData.map((list) => list.get({plain: true}));
    console.log('this is easier to read', prettyList);
    res.render('new-listing', {prettyList} )
})

module.exports = router;