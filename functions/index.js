const functions = require("firebase-functions")
const axios = require("axios")
const cors = require("cors")({ origin: true })
const config = functions.config()

exports.authPing = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    console.log("request", req.cookies)
    return axios
      .get(config.api.url + "/hr/person/authping")
      .then(response => {
        console.log("authPing axios response", response.data)
        return res.status(200).json({
          status: "success"
        })
      })
      .catch(error => {
        console.log("error:", error, error.message)
        return res.status(500).json({
          message: `Something went wrong ${error.message}`
        })
      })
  })
})

exports.auth = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(401).json({
        message: "Not allowed"
      })
    }
    return axios
      .post(config.api.url + "/hr/person/auth", {
        login: req.body.username,
        password: req.body.password
      })
      .then(response => {
        console.log("auth axios response", response.headers)
        if (response.data.status === "error") {
          return res.status(500).json({
            message: response.data.message
          })
        }
        const cookie = response.headers["set-cookie"][0].split(
          /JSESSIONID=(.*?);/gi
        )[1]
        res.cookie("JSESSIONID", cookie, { path: "/", httpOnly: false })
        return res.status(200).json({
          user: response.data.object
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
