/**
 * Created by equitysplit on 3/25/17.
 */
const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
    res.render('demo2');
});

module.exports = router;