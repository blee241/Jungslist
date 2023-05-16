
const router = require('express').Router();
//use the products table from the models
const { Products } = require("../../models");

router.get('/', async (req, res) => {
    const userData = await User.findAll({
        attributes: [
            'id',
            'username'
        ]
    });
    console.log("UGLY DATA BOO", userData);

    const prettyUserData = userData.map((user) => user.get({plain: true}));
    console.log("PRETTY USER DATA YAY", prettyUserData);
    //res.render('homepage', {prettyUserData});
})

//localhost:3001/products
router.get('/products', async (req, res) => {
  const searchLocation = req.query.location;
  //const searchPrice = req.query.price;

  try 
  {
    // Perform a database query using Sequelize
    const productDetails = await Products.findAll({
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
});

//export the module
module.exports = router;