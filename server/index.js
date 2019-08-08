const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const axios = require("axios");
const moment = require("moment");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;
const URL = "https://cleverstaff.net";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(pino);

const doAuth = async () => {
  try {
    const authResp = await axios.post(URL + "/hr/person/auth", {
      login: process.env.USERNAME,
      password: process.env.PASSWORD
    });
    if (authResp.data.status === "error") {
      console.log("Got error, throw");
      throw new Error(authResp.data.message);
    }
    const cookie = authResp.headers["set-cookie"][0].split(
      /JSESSIONID=(.*?);/gi
    )[1];
    process.env.COOKIE = cookie;
    console.log("Cookie!", cookie);
    return true;
  } catch (error) {
    throw error;
  }
};

const doPing = async cookie => {
  try {
    const resp = await axios.get(URL + "/hr/person/authping", {
      headers: { Cookie: "JSESSIONID=" + cookie }
    });
    console.log("ping response", resp);
    return true;
  } catch (error) {
    return false;
  }
};

app.get("/api/auth", async (req, res) => {
  try {
    console.log(
      "CREDS:::::::",
      process.env.USERNAME,
      process.env.PASSWORD,
      process.env.COOKIE
    );
    res.setHeader("Content-Type", "application/json");
    let cookie = process.env.COOKIE;
    if (cookie) {
      console.log("ping req");
      const ping = await doPing(cookie);
      if (ping) {
        res.send(JSON.stringify({ auth: true }));
      } else {
        const isAuth = await doAuth();
        res.send(JSON.stringify({ auth: isAuth }));
      }
    } else {
      console.log("auth req");
      const isAuth = await doAuth();
      res.send(JSON.stringify({ auth: isAuth }));
    }
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).send(error.message);
    } else {
      console.log("else auth error", error);
      res.send(
        JSON.stringify({ auth: false, error: { message: error.message } })
      );
    }
  }
});

app.get("/api/vacancies", async (req, res) => {
  try {
    const vacanciesResp = await axios.post(
      URL + "/hr/vacancy/get",
      {
        page: {
          number: 0,
          count: 15
        }
      },
      { headers: { Cookie: "JSESSIONID=" + process.env.COOKIE } }
    );
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ ...vacanciesResp.data }));
  } catch (error) {
    console.log("vacancy error", error.response.status, error.message);
    res.status(error.response.status).send(error.message);
  }
});

app.get("/api/interviewState", async (req, res) => {
  try {
    const stateResp = await axios.get(URL + "/hr/interviewState/get", {
      headers: { Cookie: "JSESSIONID=" + process.env.COOKIE }
    });
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ ...stateResp.data }));
  } catch (error) {
    console.log("states error", error.response.status, error.message);
    res.status(error.response.status).send(error.message);
  }
});

app.post("/api/statistics", async (req, res) => {
  try {
    const statsResp = await axios.post(
      URL + "/hr/stat/getVacancyInterviewDetalInfo",
      {
        vacancyId: req.body.id,
        withCandidatesHistory: true
      },
      { headers: { Cookie: "JSESSIONID=" + process.env.COOKIE } }
    );
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ ...statsResp.data }));
  } catch (error) {
    console.log("statistics error", error.response.status, error.message);
    res.status(error.response.status).send(error.message);
  }
});

app.post("/api/performance", async (req, res) => {
  try {
    const performResp = await axios.post(
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
    );
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ ...performResp.data }));
  } catch (error) {
    console.log("performance error", error.response.status, error.message);
    res.status(error.response.status).send(error.message);
  }
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
