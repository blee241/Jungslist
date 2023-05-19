const router = require('express').Router();
const { Listing } = require('../../../models');


router.post("/new-listing", async (req, res) => {
const {product_name:PdNameInput, category:CategoryInput, product_condition:PdCondInput, quantity:QuantityInput, price:PriceInput, brand:BrandInput, description:DescriptionInput, seller_location:LocationInput, customer_id:CustomerIDInput } = req.body;
const listData = await Listing.create({
    product_name: PdNameInput,
    category: CategoryInput,
    product_condition: PdCondInput,
    quantity: QuantityInput,
    price: PriceInput,
    brand: BrandInput,
    description: DescriptionInput,
    seller_location: LocationInput,
    customer_id: CustomerIDInput
});

res.json(listData);
})

module.exports = router;