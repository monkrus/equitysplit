/**
 * Created by krutoy on 3/19/17.
 */
const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
    // res.render('demo');
    res.render('demo3');
});

module.exports = router;