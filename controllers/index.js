const router = require('express').Router();
const pages = require('./pages');


//localhost:3001/
router.use("/", pages);


module.exports = router;




/*
router.get('/',(req,res) =>
{
    res.json("hi");
})*/