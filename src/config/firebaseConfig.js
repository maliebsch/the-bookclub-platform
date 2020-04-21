import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  var firebaseConfig = {
    apiKey: "AIzaSyDASB0PGzbkHKtkQvti-kP4DmxQXFn8TFQ",
    authDomain: "bookclub-d640f.firebaseapp.com",
    databaseURL: "https://bookclub-d640f.firebaseio.com",
    projectId: "bookclub-d640f",
    storageBucket: "bookclub-d640f.appspot.com",
    messagingSenderId: "878481888327",
    appId: "1:878481888327:web:978c800a35fa5b9e5b0d62",
    measurementId: "G-YRBBSB0MFZ",

  };

  

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;