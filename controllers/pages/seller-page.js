const router = require('express').Router();
const { Listing } = require("../../models");

// localhost:3001/sell/

// localhost:3001/sell/user/:id
router.get('/user/:user_id', async (req, res) => {
    console.log('Im in the get route')
    const listingData = await Listing.findAll({
        where: {
            // This value needs to be changed depending on who logs in
            customer_id: req.params.user_id
        }
    })
    res.json(listingData)
    // res.render('sellpage', {listingData})
})

// localhost:3001/sell/delete_listing/:listing_id
router.delete('/delete_listing/:listing_id', async (req, res) => {

    const listingToDestroy = await Listing.findOne({
        where: {
            id: req.params.listing_id
        }
    });

    listingToDestroy.destroy();

    const listingData = await Listing.findAll();
    res.json(listingData)
})

module.exports = router;