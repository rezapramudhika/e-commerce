const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const FB = require('fb');
const dbURL = 'mongodb://localhost:27017/e-commerce';
const db = mongoose.connection;
require('dotenv').config();

const index = require('./routes/index');
// const customers = require('./routes/customers');
const items = require('./routes/items');
const categories = require('./routes/categories');
const carts = require('./routes/carts');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
// app.use('/customers', customers);
app.use('/items', items);
app.use('/categories', categories);
app.use('/carts', carts);

mongoose.connect(dbURL, err => {
  if (!err)
    console.log('Connected to database');
  else
    console.log('Error Connect to database');
});
require('./models/carts.model');
require('./models/categories.model');
require('./models/carts.model');
require('./models/customers.model');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
