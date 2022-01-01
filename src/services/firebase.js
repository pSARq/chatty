import firebase from "firebase/compat/app";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyAaJNty8nJqvwieYkmQfJZRIW8APl0iTBk",
  authDomain: "chattysantiagoalmendra.firebaseapp.com",
  databaseURL: "https://chattysantiagoalmendra-default-rtdb.firebaseio.com/",

  projectId: "chattysantiagoalmendra",
  storageBucket: "chattysantiagoalmendra.appspot.com",
  messagingSenderId: "544460788169",
  appId: "1:544460788169:web:16f1cbd873d534f5ce1818",
  measurementId: "G-QNX4T8CP1S"
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
