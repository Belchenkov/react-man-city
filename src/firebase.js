import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/database';
import shadows from "@material-ui/core/styles/shadows";

const config = {
    apiKey: "AIzaSyCY0BAHw-urY4y3wQBfNEyfGwLQAeOroKU",
    authDomain: "man-city-d0dfa.firebaseapp.com",
    databaseURL: "https://man-city-d0dfa.firebaseio.com",
    projectId: "man-city-d0dfa",
    storageBucket: "man-city-d0dfa.appspot.com",
    messagingSenderId: "11035035474",
    appId: "1:11035035474:web:a53076438b00b7aa185c8b"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export {
    firebase,
    firebaseMatches
}