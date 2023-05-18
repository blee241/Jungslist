

const router = require('express').Router();
const {Listing} = require("../../models");

//localhost:3001/search
router.get('/', async (req, res)=>
{ 
  const productData = await Listing.findAll({
    attributes: [
            'product_name',
            'price',
            'description',
            'brand',
            'product_condition',
            'category'
        ]
});

    console.log("data need to be cleanup", productData);
    const actualProductData = productData.map(product => product.get({ plain: true }));
    console.log("updated data", actualProductData)
    res.render('searchpage', { actualProductData });//{}used for array of data
  
})



router.get('/', async (req, res) => {
  console.log('Search request received'); 
  const searchLocation = req.query.location;
  console.log('Search Location from the router:', searchLocation); // Log the search location

  try {
    const productDetails = await Listing.findAll({
      where: {
        'seller_location': searchLocation
      },
      attributes: ['product_name', 'price', 'seller_location']
    });

    console.log("productdetails need to be cleanup", productDetails);
    const actualProductDetails = productDetails.map(product => product.get({ plain: true }));
    console.log("updated data", actualProductDetails);

    res.set('Content-Type', 'application/json'); // Set the content-type header to application/json
    //res.json(actualProductDetails); // Send the response as JSON
    console.log(actualProductDetails);
    res.render('searchpage', { actualProductDetails }); // Render the 'searchpage' view passing the actualProductDetails data
    
  } catch (error) {
    console.error('Error:', error);
    res.sendStatus(500);
  }
});
module.exports = router;