import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAaJNty8nJqvwieYkmQfJZRIW8APl0iTBk",
  authDomain: "chattysantiagoalmendra.firebaseapp.com",
  databaseURL: "https://chattysantiagoalmendra-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
