const router = require('express').Router();
const { Listing } = require("../../models");

// localhost:3001/sell/user/:id
router.get('/user/:user_id', async (req, res) => {
    const listingData = await Listing.findAll({
        where: {
            // This value needs to be changed depending on who logs in
            customer_id: req.params.user_id
        }
    })
    res.json(listingData)
    // res.render('sellpage', {listingData})
})

// localhost:3001/sell/delete/:listing_id
// router.delete('/delete/:listing_id)', async (req, res) => {
//     // const {id} = req.body;
    
//     const listingToDestroy = await Listing.findOne({
//         where: {
//             id: req.params.listing_id
//         }
//     });

//     listingToDestroy.destroy();
// })

module.exports = router;