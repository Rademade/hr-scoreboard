const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

const URL = "https://cleverstaff.net";

app.get("/api/auth", (req, res) => {
  axios
    .post(URL + "/hr/person/auth", {
      login: "example@mail.com",
      password: "password"
    })
    .then(response => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify({ ...response.data }));
    })
    .catch(error => {
      console.log("auth error", error);
    });
});

app.post("/hr/vacancy/get", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ objects: [] }));
});

app.get("/hr/interviewState/get", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ object: { interviewStates: [] } }));
});

app.post("/hr/stat/getVacancyInterviewDetalInfo", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ detailedInfo: {} }));
});

app.post("/hr/stat/getUserPerformance", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ object: { entryList: [] } }));
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
