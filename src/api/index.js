import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDVpYImIj_UVaqniMW8VZ0KYhaY1ABe9Qw",
  authDomain: "hr-scoreboard.firebaseapp.com",
  databaseURL: "https://hr-scoreboard.firebaseio.com",
  projectId: "hr-scoreboard",
  storageBucket: "",
  messagingSenderId: "922022018245",
  appId: "1:922022018245:web:8f055fba5d51f30b"
});

const functions = firebase.functions();
export const auth = functions.httpsCallable("auth");
export const vacancies = functions.httpsCallable("vacancies");
