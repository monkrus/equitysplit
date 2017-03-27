/**
 * Created by equitysplit on 3/25/17.
 */
/**
 * Created by krutoy on 3/19/17.
 */
const firebase = require("firebase");
const fs       = require('fs');
const jsonfile = require('jsonfile');
const beautify = require("json-beautify");
// require('dotenv').config();

// var firebase_credentials = require("../config/firebase_credentials.json");

const config = {
    // apiKey:             firebase_credentials.apiKey,
    // authDomain:         firebase_credentials.authDomain,
    // databaseURL:        firebase_credentials.databaseURL,
    // storageBucket:      firebase_credentials.storageBucket,
    // messagingSenderId:  firebase_credentials.messagingSenderId
    apiKey:             process.env.FIREBASE_API_KEY,
    authDomain:         process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:        process.env.FIREBASE_DATABASE_URL,
    storageBucket:      process.env.FIREBASE_MESSAGING_SENDER_ID,
    messagingSenderId:  process.env.FIREBASE_STORAGE_BUCKET
};
firebase.initializeApp(config);


module.exports = {

    saveMessage: function(name, email, subject, message) {

        let current_time = new Date().getTime();

        firebase.database().ref('messages/').push({
            name: name,
            email: email,
            subject: subject,
            message: message,
            created_at : new Date().toLocaleString(),
            utc: current_time+25200000
        });

        this.getMessages();

    },

    subscribe: function(email) {

        let current_time = new Date().getTime();

        firebase.database().ref('subscribers/').push({
            email: email,
            created_at : new Date().toLocaleString(),
            utc: current_time+25200000
        });

        this.getSubscribers();

    },

    test: function() {
        jsonfile.writeFile('./helpers/subscribers.json', {stuff:'thing'}, function (err) {
            console.log('running the subscribe');
            console.error(err)
        });
    },

    getMessages: function(callback) {

        // return firebase.database().ref('/messages/').orderByChild('utc').once('value').then(function(snapshot) {
        firebase.database().ref('/messages/').orderByChild('utc').once('value').then(function(snapshot) {
            // console.log(snapshot.val());
            // console.log(typeof snapshot.val());

            fs.writeFile("./helpers/messages.txt", JSON.stringify(snapshot.val()), function(err) {
                if(err) {
                    return console.log(err);
                }
                // console.log("File saved successfully!");
            });

            jsonfile.writeFile('./helpers/messages.json', snapshot.val(), function (err) {
                console.log('running the writeFile');
                console.error(err);
            });

            callback(snapshot.val());

        });

    },

    getSubscribers: function(callback) {

        // return firebase.database().ref('/subscribers/').orderByChild('utc').once('value').then(function(snapshot) {
        firebase.database().ref('/subscribers/').orderByChild('utc').once('value').then(function(snapshot) {
            // console.log(snapshot.val());

            // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>');
            // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>');

            fs.writeFile("./helpers/subscribers.text", JSON.stringify(snapshot.val()), function(err) {
                if(err) {
                    return console.log(err);
                }
                // console.log("File saved successfully!");
            });

            jsonfile.writeFile('./helpers/subscribers.json', snapshot.val(), function (err) {
                console.log('running the subscribe');
                console.error(err)
            });

            callback(snapshot.val());

        });

    }

};

