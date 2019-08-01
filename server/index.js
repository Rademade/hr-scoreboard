const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const axios = require("axios");
const moment = require("moment");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;
const URL = "https://cleverstaff.net";
let cookie = process.env.COOKIE;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(pino);

console.log("CREDS:::::::", process.env.USERNAME, process.env.PASSWORD);
app.get("/api/auth", (req, res) => {
  if (cookie === "null") {
    axios
      .post(URL + "/hr/person/auth", {
        login: process.env.USERNAME,
        password: process.env.PASSWORD
      })
      .then(response => {
        process.env.COOKIE = response.headers["set-cookie"][0].split(
          /JSESSIONID=(.*?);/gi
        )[1];
        console.log("cookie!", process.env.COOKIE);
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify({ ...response.data }));
      })
      .catch(error => {
        console.log("auth error", error.response.status, error.message);
        res.status(error.response.status).send(error.message);
      });
  } else {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ object: { userId: 1 } }));
  }
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
      { headers: { Cookie: "JSESSIONID=" + process.env.COOKIE } }
    )
    .then(response => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify({ ...response.data }));
    })
    .catch(error => {
      console.log("vacancy error", error.response.status, error.message);
      res.status(error.response.status).send(error.message);
    });
});

app.get("/api/interviewState", (req, res) => {
  axios
    .get(URL + "/hr/interviewState/get", {
      headers: { Cookie: "JSESSIONID=" + process.env.COOKIE }
    })
    .then(response => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify({ ...response.data }));
    })
    .catch(error => {
      console.log("states error", error.response.status, error.message);
      res.status(error.response.status).send(error.message);
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
      { headers: { Cookie: "JSESSIONID=" + process.env.COOKIE } }
    )
    .then(response => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify({ ...response.data }));
    })
    .catch(error => {
      console.log("statistics error", error.response.status, error.message);
      res.status(error.response.status).send(error.message);
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
      { headers: { Cookie: "JSESSIONID=" + process.env.COOKIE } }
    )
    .then(response => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify({ ...response.data }));
    })
    .catch(error => {
      console.log("performance error", error.response.status, error.message);
      res.status(error.response.status).send(error.message);
    });
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../build")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
  });
}

app.listen(port, () =>
  console.log("Express server is running on localhost:", port)
);
