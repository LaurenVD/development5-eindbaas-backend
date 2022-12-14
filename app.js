// add mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://m001-student:9587kmseja336@sandbox.z5noqyn.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true});

//mongodb://localhost:27017/
//mongodb+srv://m001-student:9587kmseja336@sandbox.z5noqyn.mongodb.net/?retryWrites=true&w=majority

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const passport = require('./passport/passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const apiV1DonutsRouter = require('./routes/api/v1/donuts');

var app = express();

// add cors
app.use(cors({
  //origin true
  origin: true,
  credentials: true,
  //add methods
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/donuts', passport.authenticate('jwt', { session: false }) ,apiV1DonutsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

console.log("Hello World");

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//listener 
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

module.exports = app;