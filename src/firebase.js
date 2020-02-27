// firebase.js
import firebase from "firebase";

// Initialize Firebase
// USE YOUR CONFIG OBJECT
const config = {
    apiKey: "AIzaSyCdzdADg9WBTilxo_wNHdv-IyG4IkMILwY",
    authDomain: "project5-database.firebaseapp.com",
    databaseURL: "https://project5-database.firebaseio.com",
    projectId: "project5-database",
    storageBucket: "project5-database.appspot.com",
    messagingSenderId: "54113912690"
};
firebase.initializeApp(config);

// this exports the CONFIGURED version of firebase
export default firebase;
