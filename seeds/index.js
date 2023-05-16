const sequelize = require('../config/connection');
const User = require('../models/User');
const Listing = require('../models/Listing');
const userSeedData = require('./user-seeds');
const productSeedData = require('./product-seeds');

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