const express = require('express');
const path = require('path');

const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const controllers = require('./controllers');
const models = require('./models');



const app = express();
const PORT = process.env.PORT || 3001;


// Front end
//app.use(express.static(path.join(__dirname, '/public')));

app.use(express.static('public'));

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({});


// Inform Express.js on which template engine to use
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);

// For post http requests
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
//const models = require('./models');

app.use(controllers);

// Route for user login
app.post('/api/users/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email and password
      const user = await models.User.findOne({ where: { email, user_password: password } });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Respond with the user ID
      res.status(200).json({ userId: user.id });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`The server is running on PORT ${PORT}`);
    });
  });

  
  
  
  



