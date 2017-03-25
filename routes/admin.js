/**
 * Created by krutoy on 3/19/17.
 */
const express = require('express');
const router = express.Router();
const fb_conn = require('../helpers/firebase_connection');
// var Promise = require('promise');
// var messages = require('../helpers/messages.json');
// var subscriptions = require('../helpers/subscribers.json');
// var fs = require('fs');

router.get('/', function(req, res, next) {
    res.redirect('/admin/messages');
});

router.get('/messages', function(req, res, next){

    let entries = {
        messages: null
    };

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
                res.render('admin/messages', {
                    'messages': entries.messages
                });
            }
        })
    });
    // res.render('admin/messages', {
    //     'messages': entries.messages
    // });


});

router.get('/subscribers', function(req, res, next){

    let entries = {
        subscribers: null
    };

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
                res.render('admin/subscribers', {
                    'subscribers': entries.subscribers
                });
            }
        })
    });

});

    // let entries = {
    //     messages: null,
    //     subscribers: null
    // };

    // console.log('inside updates');

    // function getEntries () {
    //
    //     new Promise(function(resolve, reject){
    //         console.log('inside promise1');
    //         fb_conn.getSubscribers(function(subscribers){
    //             // console.log('inside getSubscribers - entries.subscribers is '+entries.subscribers);
    //             function checkSub(callback){
    //                 entries.subscribers = subscribers;
    //                 callback();
    //             }
    //             checkSub(function(){
    //                 if (entries.subscribers === null) {
    //                     console.log('entries.subscribers IS falsy');
    //                     // console.log(entries.subscribers);
    //                     reject(new Error('could not get subscribers'));
    //                 } else {
    //                     // console.log(entries.subscribers);
    //                     console.log('entries.subscribers not null');
    //                     resolve();
    //                 }
    //             })
    //         });
    //         // return entries;
    //     }).then(function(resolve, reject){
    //         console.log('inside promise2');
    //         fb_conn.getMessages(function(messages) {
    //             // console.log('inside getMessages - entries.messages is '+entries.messages);
    //             function checkMes(callback){
    //                 entries.messages = messages;
    //                 callback();
    //             }
    //             checkMes(function(){
    //                 if (entries.messages === null) {
    //                     console.log('entries.messages IS falsy');
    //                     // console.log(entries.messages);
    //                     reject(new Error('could not get messages'));
    //                 } else {
    //                     // console.log(entries.messages);
    //                     console.log('entries.messages not null');
    //                     // console.log(entries.messages);
    //                     resolve();
    //                 }
    //             })
    //         });
    //         // if(entries.messages){
    //         //     console.log(entries.messages);
    //         //     resolve();
    //         // } else {
    //         //     console.log(entries.messages);
    //         //     reject(new Error('could not get messages'));
    //         // }
    //     //     return entries;
    //     }).then(function(resolve, reject){
    //         console.log('inside promise3');
    //         console.log('subscribers '+entries.subscribers);
    //         console.log('messages '+entries.messages);
    //         res.render('updates', {
    //             'messages': entries.messages,
    //             'subscribers': entries.subscribers
    //         });
    //     })
    // }

    // getEntries();

    // fb_conn.getSubscribers(function () {
    //     fb_conn.getMessages(function () {
    //         (function(){
    //             res.render('updates', {
    //                 'messages': messages,
    //                 'subscribers': subscribers
    //             });
    //         })();
    //     });
    // });
    //
    //
    // function getSub() {
    //     fb_conn.getSubscribers(function () {
    //         messages = require('../helpers/messages.json');
    //     });
    // }
    //
    // function getMess() {
    //     fb_conn.getMessages(function () {
    //         subscribers = require('../helpers/subscribers.json');
    //     });
    // }
    //
    // (function(){
    //     (function (){
    //         getSub();
    //         getMess();
    //     })();
    // }());

    // var messages = require('../helpers/messages.json');
    // var subscribers = require('../helpers/subscribers.json');
    // console.log(require('../helpers/messages.json'));
    // console.log(JSON.stringify(messages));
    // console.log(JSON.stringify(subscriptions));
    // console.log(messages);
    // res.render('updates', {'messages':messages, 'subscriptions':subscriptions});
    // res.render('updates', {
    //     'messages': messages,
    //     'subscribers': subscribers
    // });

module.exports = router;