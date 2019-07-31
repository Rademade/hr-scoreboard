const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const axios = require("axios");
const moment = require("moment");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

const URL = process.env.API_URL;
let cookie = null;

app.get("/api/auth", (req, res) => {
  axios
    .post(URL + "/hr/person/auth", {
      login: process.env.USERNAME,
      password: process.env.PASSWORD
    })
    .then(response => {
      cookie = response.headers["set-cookie"][0].split(
        /JSESSIONID=(.*?);/gi
      )[1];
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify({ ...response.data }));
    })
    .catch(error => {
      console.log("auth error", error.message);
    });
});

app.get("/api/vacancies", (req, res) => {
  axios
    .post(
      URL + "/hr/vacancy/get",
      {
        page: {
          number: 0,
          count: 15
        }
      },
      { headers: { Cookie: "JSESSIONID=" + cookie } }
    )
    .then(response => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify({ ...response.data }));
    })
    .catch(error => {
      console.log("vacancy error", error.message);
    });
});

app.get("/api/interviewState", (req, res) => {
  axios
    .get(URL + "/api/interviewState", {
      headers: { Cookie: "JSESSIONID=" + cookie }
    })
    .then(response => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify({ ...response.data }));
    })
    .catch(error => {
      console.log("states error", error.message);
    });
});

app.post("/api/statistics", (req, res) => {
  axios
    .post(
      URL + "/hr/stat/getVacancyInterviewDetalInfo",
      {
        vacancyId: req.body.id,
        withCandidatesHistory: true
      },
      { headers: { Cookie: "JSESSIONID=" + cookie } }
    )
    .then(response => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify({ ...response.data }));
    })
    .catch(error => {
      console.log("statistics error", error.message);
    });
});

app.post("/api/performance", (req, res) => {
  axios
    .post(
      URL + "/hr/stat/getUserPerformance",
      {
        dateRangeType: "currentWeek",
        displayWeeklyStats: false,
        from: moment()
          .startOf("week")
          .valueOf(),
        personIds: req.body.personIds,
        to: moment()
          .endOf("day")
          .valueOf(),
        vacancyIds: req.body.vacancyIds
      },
      { headers: { Cookie: "JSESSIONID=" + cookie } }
    )
    .then(response => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify({ ...response.data }));
    })
    .catch(error => {
      console.log("performance error", error.message);
    });
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
