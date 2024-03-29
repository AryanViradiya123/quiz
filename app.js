var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var questionRouter = require('./routes/question');
var userquizzesRouter = require('./routes/userquizzes');
var useranswersRouter = require('./routes/useranswers');
var answersRouter = require('./routes/answers');
var quizzesRouter = require('./routes/quizzes');
var userRouter = require('./routes/user');
var usersRouter = require('./routes/users');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Aryan:aryan123@cluster0.pmi8zzh.mongodb.net/project-4')
  .then(() => console.log('Connected!'))
  .catch((error) => console.log(error))

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', userRouter);
app.use('/question', questionRouter);
app.use('/userquizzes', userquizzesRouter);
app.use('/useranswers', useranswersRouter);
app.use('/answers', answersRouter);
app.use('/quizzes',quizzesRouter)
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
