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

const doPing = async cookie => {
  try {
    console.log("do ping");
    const resp = await axios.get(URL + "/hr/person/authping", {
      headers: { Cookie: "JSESSIONID=" + cookie }
    });
    console.log("ping response", resp.data);
    return true;
  } catch (error) {
    console.log("ping error", error);
    return false;
  }
};

const doAuth = async () => {
  console.log("do auth");
  const authResp = await axios.post(URL + "/hr/person/auth", {
    login: process.env.USERNAME,
    password: process.env.PASSWORD
  });
  if (authResp.data.status === "error") {
    throw new Error(authResp.data.message);
  }
  const cookie = authResp.headers["set-cookie"][0].split(
    /JSESSIONID=(.*?);/gi
  )[1];
  return { isAuth: true, newCookie: cookie };
};

app.post("/api/auth", async (req, res) => {
  try {
    const cookie = req.body.cookie;
    console.log("/api/auth", cookie);
    if (cookie) {
      const pingRes = doPing(cookie);
      if (pingRes) {
        process.env.COOKIE = cookie;
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify({ isAuth: true }));
      } else {
        const authRes = await doAuth();
        console.log("authResp", authRes);
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(authRes));
      }
    } else {
      const authRes = await doAuth();
      console.log("authResp", authRes);
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(authRes));
    }
  } catch (error) {
    console.log("api auth error", error.message);
    if (error.status) {
      res.status(error.response.status).send(error.message);
    } else {
      res.send(JSON.stringify({ isAuth: false, message: error.message }));
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
