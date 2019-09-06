const functions = require("firebase-functions");
const axios = require("axios");
const admin = require("firebase-admin");
admin.initializeApp();

const URL = "https://cleverstaff.net";

exports.scheduledFunction = functions.pubsub
  .schedule("every 2 minutes")
  .onRun(async context => {
    console.log("Run every 2 minutes", context, URL);
    try {
      const authResp = await axios.post(URL + "/hr/person/auth", {
        login: functions.config().auth.username,
        password: functions.config().auth.password
      });
    } catch (error) {
      console.log("Error:", error);
    } finally {
      return null;
    }
  });
