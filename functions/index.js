const functions = require("firebase-functions")
const axios = require("axios")
const cors = require("cors")({ origin: true })
const config = functions.config()

exports.auth = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(401).json({
        message: "Not allowed"
      })
    }
    console.log("request body", req.body)
    return axios
      .post(config.api.url + "/hr/person/auth", {
        login: req.body.username,
        password: req.body.password
      })
      .then(response => {
        console.log("auth axios response", response.data)
        if (response.data.status === "error") {
          return res.status(500).json({
            message: response.data.message
          })
        }
        // const cookie = response.headers["set-cookie"][0].split(
        //   /JSESSIONID=(.*?);/gi
        // )[1];
        return res.status(200).json({
          data: response.data.object
        })
      })
      .catch(error => {
        return res.status(error.code).json({
          message: `Something went wrong ${error.message}`
        })
      })
  })
})

exports.vacancies = functions.https.onRequest((req, res) => {
  console.log("vacancies", req, res)
  res.send("vacancies")
})
