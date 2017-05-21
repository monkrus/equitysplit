/**
 * Created by krutoy on 5/18/17.
 */
const express = require('express');
const router = express.Router();

router.get('/dashboard', function(req, res) {
    res.render('/dashboard');
});
