const router = require('express').Router();
const pages = require('./pages');
const listing = require('./listing/listing');




//localhost:3001/
router.use("/", pages);


module.exports = router;


<<<<<<< HEAD


/*
router.get('/',(req,res) =>
{
    res.json("hi");
})*/
=======
router.use('/listing', listing);





module.exports = router;
>>>>>>> 36110abf41fff8ae568672eca447bda8afa33cc3
