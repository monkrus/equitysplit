/**
 * Created by krutoy on 3/19/17.
 */

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('blog');
});

router.get('/:post_id', function(req, res) {
    res.render('blog_posts/'+req.params.post_id);
});


module.exports = router;