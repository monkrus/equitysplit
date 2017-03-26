require('dotenv').config();
const express         = require('express');
const path            = require('path');
const favicon         = require('serve-favicon');
const logger          = require('morgan');
const cookieParser    = require('cookie-parser');
const bodyParser      = require('body-parser');
// const HTMLing         = require('htmling');
const handlebars      = require('express-handlebars');

const index           = require('./routes/index');
const blog            = require('./routes/blog');
const demo            = require('./routes/demo');
const demo2            = require('./routes/demo2');
const admin         = require('./routes/admin');
// const users           = require('./routes/users');

const app             = express();


// // This is to be used with the htmling view engine
// app.engine('html', HTMLing.express(__dirname + '/views/',
//     // *** only in dev-mode!!! ***
//     {watch: true}
//     ));
// app.set('view engine', 'html');


// // This is to be used with the handlebars view engine
// app.engine('.hbs', handlebars({defaultLayout: 'main', extname: '.hbs'}));
// app.set('view engine', '.hbs');


// This is to be used with the jade view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/blog', blog);
app.use('/demo', demo);
app.use('/demo2', demo2);
app.use('/admin', admin);
app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
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
