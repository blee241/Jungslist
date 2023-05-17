const router = require('express').Router();
const {Listing} = require("../../models");

router.get('/', async (req, res)=>
{ 
  const productData = await Listing.findAll({
    attributes: [
            'product_name',
            'price',
            //'description',
            'seller_location'
            //'order_date_and_time'
        ]
});

    console.log("data need to be cleanup", productData);
    const actualProductData = productData.map(product => product.get({ plain: true }));
    console.log("updated data", actualProductData)
  res.render('searchpage', { actualProductData });//{}used for array of data
})



router.get('/search', async (req, res) => {
  const searchLocation = req.query.location;

  try {
    // Perform a database query using Sequelize
    const productDetails = await Listing.findAll({
      where: {
        seller_location: searchLocation,
      },
      attributes: ['product_name'],
      include: [
        // Include details if necessary
      ]
    });

    // Extract the necessary information from productDetails
    const productNames = productDetails.map((product) => product.get({ plain : true}));
    res.render('searchpage', { productDetails });
    // Send the retrieved product names as a response
    res.json(productNames);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching product details' });
  }
});
/*
router.get('/search', async (req, res) => {
  const searchLocation = req.query.location;
  //const searchPrice = req.query.price;

  try 
  {
    // Perform a database query using Sequelize
    const productDetails = await Listing.findAll({
      where: {
        seller_location: searchLocation,
        //price: searchPrice,
      },
      attributes: ['productName'],
      include: [{
        // Include details if necessary
      }]
    });


    // Send the retrieved product details as a response
    res.json(productDetails);
    //we can use res.render('',table need to display)
  } catch (error) {
    console.error('Error:', error);
    res.sendStatus(500);
  }
});*/

//export the module*/
module.exports = router;