/**
 * Created by krutoy on 3/19/17.
 */
var firebase = require("firebase");
var fs       = require('fs');
var jsonfile = require('jsonfile');
var beautify = require("json-beautify");
var dotenv   = require('dotenv');

// var firebase_credentials = require("../config/firebase_credentials.json");

var config = {
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

        firebase.database().ref('messages/').push({
            name: name,
            email: email,
            subject: subject,
            message: message,
            created_at : new Date().toLocaleString(),
            utc: new Date().getTime()
        });

        return firebase.database().ref('/messages/').orderByChild('utc').once('value').then(function(snapshot) {
            console.log(snapshot.val());
            // console.log(typeof snapshot.val());

            fs.writeFile("./helpers/messages.txt", JSON.stringify(snapshot.val()), function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("File saved successfully!");
            });

            jsonfile.writeFile('./messages.json', snapshot.val(), function (err) {
                console.error(err)
            })

        });

    },
    subscribe: function(email) {

        firebase.database().ref('subscribers/').push({
            email: email,
            created_at : new Date().toLocaleString(),
            utc: new Date().getTime()
        });

        return firebase.database().ref('/subscribers/').orderByChild('utc').once('value').then(function(snapshot) {
            console.log(snapshot.val());

            fs.writeFile("./helpers/subscribers.text", JSON.stringify(snapshot.val()), function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("File saved successfully!");
            });

            jsonfile.writeFile('./subscribers.json', snapshot.val(), function (err) {
                console.error(err)
            });

        });
    }
};

