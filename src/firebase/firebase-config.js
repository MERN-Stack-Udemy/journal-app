import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDgd4DLBSDYhswI9Jvk3irNBROwMyw1rP8",
    authDomain: "journal-app-f332f.firebaseapp.com",
    projectId: "journal-app-f332f",
    storageBucket: "journal-app-f332f.appspot.com",
    messagingSenderId: "57146579995",
    appId: "1:57146579995:web:858d5ee8af2b5f509e6cbe"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}