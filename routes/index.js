var express = require('express');
var router = express.Router();

var fb_conn = require('../helpers/firebase_connection');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('sregdrhgdfthfth');
  res.render('index', { title: 'Express' });
});


router.post('/message', function(req, res, next) {
    fb_conn.saveMessage(
        req.body.name,
        req.body.email,
        req.body.subject,
        req.body.message
    );
    // console.log(req.body.name+' '+req.body.email+' '+req.body.subject+' '+req.body.message);
    res.redirect('/');
});


router.post('/subscribe', function(req, res, next) {
    fb_conn.subscribe(
        req.body.email
    );
    // console.log(req.body.email);
    res.redirect('/');
});

module.exports = router;