const router = require('express').Router();
const { Listing } = require('../../../models')



// localhost:3001/api/search
router.get('/', async (req, res) => {
    console.log("from the API page")
    const searchLocation = req.query.location;


  try {
    let productData;

    if (searchLocation) {
      productData = await Listing.findAll({
        where: {
          'seller_location': searchLocation
        },
        attributes: ['product_name', 'price', 'seller_location']
      });
    } else {
      productData = await Listing.findAll({
        attributes: [
          'product_name',
          'price',
          'description',
          'brand',
          'product_condition',
          'category',
          'seller_location'
        ]
      });
    }


    //console.log("data need to be cleaned up", productData);
    const actualProductData = productData.map(product => product.get({ plain: true }));
    console.log("updated data  ", actualProductData);


    let filteredProductData;

    if (searchLocation) {
        filteredProductData = actualProductData.filter(product => product.seller_location === searchLocation);
        console.log("filtered data: ", filteredProductData);
        res.status(200).json(filteredProductData);
     } else {
        res.status(400).json("Could not find based on City");
     }

     
  } catch (error) {
      console.error('Error:', error);
      res.sendStatus(500);
  }
})

module.exports = router;