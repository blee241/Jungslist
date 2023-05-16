const User = require('./User');
const Listing = require('./Listing');

User.hasMany(Listing, {
    foreignKey: 'customer_id'
});

Listing.belongsTo(User, {
    foreignKey: 'customer_id'
});

module.exports = {User, Listing};