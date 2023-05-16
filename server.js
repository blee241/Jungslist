const express = require('express');
const path = require('path');
const controllers = require('./controllers');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ });


// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// For post http requests
app.use(express.json());
app.use(express.urlencoded( { extended: true }));

app.use(controllers);

app.listen(PORT, () => {
    console.log(`Server opened at http://localhost:${PORT}/`);
});