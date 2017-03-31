var express = require('express');
var router = express.Router();
var fb_conn = require('../helpers/firebase_connection');

router.get('/register', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
  fb_conn.registerUser(
    req.body.email,
    req.body.password
  );
  // console.log(req.body.email+' '+req.body.password);
  res.redirect('/');
});

router.get('/login', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  fb_conn.loginUser(
    req.body.email,
    req.body.password
  );
  // console.log(req.body.email+' '+req.body.password);
  res.redirect('/');
});

router.get('/logout', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
