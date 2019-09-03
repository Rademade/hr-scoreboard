const functions = require("firebase-functions");

exports.scheduledFunction = functions.pubsub
  .schedule("every 2 minutes")
  .onRun(async context => {
    console.log("Run every 2 minutes", context);
    return null;
  });
