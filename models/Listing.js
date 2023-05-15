const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

Listing.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    customer_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    product_name: {

    },
    category: {

    },
    condition: {

    },
    quantity: {

    },
    price: {

    },
    brand: {

    },
    description: {

    },
    order_date_and_time: {

    },
    seller_location: {

    }
},{
    sequelize,
    freezeTablename: true,
    modelName: 'Listing'
});

module.exports = Listing;