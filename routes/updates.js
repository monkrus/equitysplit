/**
 * Created by krutoy on 3/19/17.
 */
var express = require('express');
var router = express.Router();
var messages = require('../helpers/messages.json');
var subscriptions = require('../helpers/subscribers.json');
var fs = require('fs');

router.get('/', function(req, res, next) {
    console.log(JSON.stringify(messages));
    console.log(JSON.stringify(subscriptions));
    // console.log(messages);
    // res.render('updates', {'messages':messages, 'subscriptions':subscriptions});
    res.render('updates', {'messages':messages, 'subscriptions':subscriptions});
    // res.render('updates');
});

module.exports = router;