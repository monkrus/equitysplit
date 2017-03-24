/**
 * Created by krutoy on 3/19/17.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('blog');
});

router.get('/:post_id', function(req, res, next) {
    res.render('blog_posts/'+req.params.post_id);
});


module.exports = router;