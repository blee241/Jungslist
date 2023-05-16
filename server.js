const express = require('express');
const path = require('path');
const controllers = require('./controllers');
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

// For post http requests
app.use(express.json());
app.use(express.urlencoded( { extended: true }));

app.use(controllers);

app.listen(PORT, () => {
    console.log(`Server opened at http://localhost:${PORT}/`);
});