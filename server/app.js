var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var categoriesRouter = require('./routes/categories');


var app = express();

app.set("secretKey", process.env.APP_SECRET_KEY)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const whiteList = ['https://proyectomern.matiastaberner.com.ar']
app.use(cors({origin: whiteList}));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);
app.use('/categories', categoriesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


function verifyToken(req, res, next){
  jwt.verify(req.headers["x-access-token"], req.app.get("secretKey"), function(error, payload){
    if(error){
      res.json({message:error.message})
    }else{
      console.log("payload", payload)
      req.body.userId = payload.userId
      next()
    }
  })
}

app.verifyToken = verifyToken

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
