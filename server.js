const express = require('express');
const path = require('path');
const controllers = require('./controllers');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ });



// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");

// For post http requests
app.use(express.json());
app.use(express.urlencoded( { extended: true }));

// To access the public/front-end content
app.use(express.static(path.join(__dirname, './public')));
app.use(controllers);

// app.listen(PORT, () => {
//     console.log(`Server opened at http://localhost:${PORT}/`);
// });

// Connect to the database AND THEN run the server.
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log("Server opened at http://localhost:${PORT}");
    })
});