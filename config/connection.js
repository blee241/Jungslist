const Sequelize = require('sequelize');
require('dotenv').config();

 let sequelize;
//This if statement is necessary for me to deploy my database to the internet
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    //This is the normal sequelize call to connect to my database in my computer.
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            PORT: 3001
        }
    );
}

module.exports = sequelize;