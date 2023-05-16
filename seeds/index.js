const sequelize = require('../config/connecion.js');
const User = require('../models/User');
const Listing = require('../models/Listing.js');
const userSeedData = require('./user-seeds.json');
const productSeedData = require('./product-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true })

    await User.bulkCreate(userSeedData, {
        returning: true
    })

    await Listing.bulkCreate(productSeedData, {
        returning: true
    })

    process.exit(0);
}

seedDatabase();