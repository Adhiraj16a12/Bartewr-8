import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyA0-q7MPnIyB5ldJpP7nPYb3VUZIumUYfg",
    authDomain: "barter-67015.firebaseapp.com",
    projectId: "barter-67015",
    storageBucket: "barter-67015.appspot.com",
    messagingSenderId: "488421564285",
    appId: "1:488421564285:web:1a6b20c6bb8b393bd5b614",
    measurementId: "G-WJVY13FWVM"
  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
