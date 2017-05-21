/**
 * Created by krutoy on 3/19/17.
 */
const express = require('express');
const router = express.Router();

const fb_conn = require('../helpers/firebase_connection');


router.get('/', function(req, res) {
    res.redirect('/admin/messages');
});

router.get('/messages', function(req, res){
    let entries = {messages: null};
    fb_conn.getMessages(function(messages) {
        // console.log('inside getMessages - entries.messages is '+entries.messages);
        function checkMes(callback){
            entries.messages = messages;
            callback();
        }
        checkMes(function(){
            if (entries.messages === null) {
                reject(new Error('could not get messages'));
            } else {
                res.render('admin/messages', {'messages': entries.messages});
            }
        })
    });
});

router.get('/subscribers', function(req, res){
    let entries = { subscribers: null };
    fb_conn.getSubscribers(function(subscribers) {
        // console.log('inside getMessages - entries.messages is '+entries.messages);
        function checkSub(callback){
            entries.subscribers = subscribers;
            callback();
        }
        checkSub(function(){
            if (entries.subscribers === null) {
                reject(new Error('could not get subscribers'));
            } else {
                res.render('admin/subscribers', {'subscribers': entries.subscribers});
            }
        })
    });
});

router.get('/create_post', function(req, res){
    res.render('admin/create_post');
});

router.post('/create_post', function(req, res){
    // res.render('admin/create_post');
});

module.exports = router;