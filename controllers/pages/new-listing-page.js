const router = require('express').Router();
const { Listing } = require('../../models');


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

    const prettyList = listData.map((list) => list.get({plain: true}));
    
    res.render('new-listing', {prettyList} )
})


module.exports = router;