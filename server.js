const path = require('path');
const express = require('express');
// sets up an Express session and connects the session to our Sequelize db
const session = require('express-session');
// importing the connection to sequelize from config/connection.js
const sequelize = require('./config/connection');
// set up Handlebars.js as app's template engine of choice
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret', // replace with actual secret to store in .env
    cookie: {
      // Session will automatically expire in 10 minutes
      expires: 10 * 60 * 1000
    }, 
    resave: true,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};
  
app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// const routes = require('./controllers');
app.use(require('./controllers/'));
// app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});