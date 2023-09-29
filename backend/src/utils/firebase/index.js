const firebase = require("firebase");
const admin = require('firebase-admin');
const {firebaseCredentials, firestoreConfigs} = require("./config");

firebase.initializeApp(firestoreConfigs);
admin.initializeApp({
    credential: admin.credential.cert(firebaseCredentials),
    databaseURL: 'https://remitano-renec-dev-test.firebaseio.com',
});

const db = admin.firestore();
module.exports = {firebase, admin, db};

