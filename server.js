const express = require('express');
const routes = require('./controllers');
// Utilizes cookies to save and retrieve data
const session = require('express-session');
const path = require('path');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
// Utilizing session storage
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super Secret Secret',
  cookie: {},
  resave: false,
  // forces a session to be saved to the store
  // false may be preferred here for implementing login sessions
  saveUninitialized: true,
  // note: default server-side session storage is purposely not designed for a production environment
  // it will leak memory under most conditions
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

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}!`));
});