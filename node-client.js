var firebase = require(‘firebase’);
firebase.initializeApp({
 “appName”: “Gamache Web Designs”,
 “serviceAccount”: “./service-account.json”,
 “authDomain”: “gamache-web-designs.firebaseapp.com”,
 "databaseURL": "https://gamache-web-designs.firebaseio.com"
});
var ref = firebase.app().database().ref();
ref.once(‘value’)
 .then(function (snap) {
 console.log(‘snap.val()’, snap.val());
 });
