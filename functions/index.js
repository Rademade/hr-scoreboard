const functions = require("firebase-functions");
// const axios = require("axios");
// const admin = require("firebase-admin");
// admin.initializeApp();

// const URL = "https://cleverstaff.net";

exports.auth = functions.https.onCall((data, context) => {
  console.log("auth", data, context);
});
