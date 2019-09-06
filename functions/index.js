const functions = require("firebase-functions");
const axios = require("axios");
const config = functions.config();

exports.auth = functions.https.onCall((data, context) => {
  // console.log("auth", data, context);
  return axios
    .post(config.api.url + "/hr/person/auth", {
      login: data.username,
      password: data.password
    })
    .then(response => {
      console.log("auth axios response", response.data);
      const cookie = response.headers["set-cookie"][0].split(
        /JSESSIONID=(.*?);/gi
      )[1];
      return {
        data: response.data.object,
        cookie
      };
    });
});

exports.vacancies = functions.https.onCall((data, context) => {
  console.log("vacancies", data, context);
});
