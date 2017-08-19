const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://chrisd:chrisd@ds027618.mlab.com:27618/skin-audit-dev';
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./services/passport');

const app = express();



mongoose.connect(url);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['my secret']
  })
)

app.use(require('body-parser').urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);