const express = require('express');
const app = express();
const mongoose = require('mongoose');
const url = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

require('./models/User');
require('./services/passport');



//connect up to mongodb via mongoose
mongoose.connect(url.mongoURL);



//Setting up the express app
app.use(morgan('dev')); //logs every requrest to the console.
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(cookieParser()); //to read cookies


//required for passport
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['my secret']
  })
)

//routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);