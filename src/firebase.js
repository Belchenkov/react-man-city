import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

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
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseDB,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers
}
