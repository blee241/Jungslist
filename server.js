const express = require('express');
const path = require('path');
<<<<<<< HEAD
=======
const controllers = require('./controllers/pages');
>>>>>>> 36110abf41fff8ae568672eca447bda8afa33cc3
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const controllers = require('./controllers');
const models = require('./models');

<<<<<<< HEAD
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
=======

const app = express();
const PORT = process.env.PORT || 3001;


// Front end
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.static('public'));

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({});


// Inform Express.js on which template engine to use
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);

// For post http requests
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
const models = require('./models');

app.use(controllers);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`The server is running on PORT ${PORT}`);
    })
});

>>>>>>> 36110abf41fff8ae568672eca447bda8afa33cc3
