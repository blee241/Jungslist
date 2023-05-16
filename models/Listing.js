const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Listing extends Model {}

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
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Generic'
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    condition: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DOUBLE(6,2),
        allowNull: false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        defaultValue: 'No description provided'
    },
    order_date_and_time: {
        type: DataTypes.NOW
    },
    seller_location: {
        type: DataTypes.STRING
    }
},{
    sequelize,
    freezeTablename: true,
    modelName: 'listing'
});

module.exports = Listing;