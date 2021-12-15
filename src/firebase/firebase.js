import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPCCHSn0kZ76rIim9_vUxS8pAPd07fFUU",

  authDomain: "ecommers-5022c.firebaseapp.com",

  projectId: "ecommers-5022c",

  storageBucket: "ecommers-5022c.appspot.com",

  messagingSenderId: "474862791986",

  appId: "1:474862791986:web:8108a28ffc51e28ad8bb2b",

  measurementId: "G-E44L0Y2QQK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//initalizing the databse
const db = firebaseApp.firestore(); // real-time database in the firebase
const auth = firebase.auth(); //handle all the signing.

export { db, auth }; //exporting the
