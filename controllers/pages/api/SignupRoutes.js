const router = require('express').Router();
const { User } = require('../../../models');

router.get('/', (req, res) => {
    res.json('From signup-page file')
 })

 router.post("/sign-up", async (req, res) => {
    const {email:emailInput, user_password:passwordInput, buyer_location:locationInput} = req.body;
    const signupData = await User.create({
        email: emailInput,
        user_password: passwordInput,
        buyer_location:locationInput
    });
    res.json(signupData)
 });

 module.exports = router;