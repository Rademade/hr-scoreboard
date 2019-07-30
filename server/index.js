const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const pino = require("express-pino-logger")();
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(pino);

const URL = "https://cleverstaff.net";
let cookie = null;

app.get("/api/auth", (req, res) => {
  axios
    .post(URL + "/hr/person/auth", {
      login: "viktor@rademade.com",
      password: "a343parder433b"
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
  console.log("DEBUB", cookie);
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
      console.log("HEY VACANCIES", response.data);
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify({ ...response.data }));
    })
    .catch(error => {
      console.log("vacancy error", error.message);
    });
});

// app.get("/api/interviewState", (req, res) => {
//   axios
//     .get("/api/interviewState")
//     .then(response => {
//       res.setHeader("Content-Type", "application/json");
//       res.send(JSON.stringify({ ...response.data }));
//     })
//     .catch(error => {
//       console.log("states error", error);
//     });
// });

// app.post("/api/statistics", (req, res) => {
//   // "/hr/stat/getVacancyInterviewDetalInfo"
//   // {
//   //   withCandidatesHistory: true
//   // }
//   res.setHeader("Content-Type", "application/json");
//   res.send(JSON.stringify({ detailedInfo: {} }));
// });

// app.post("/api/performance", (req, res) => {
//   // const weekReport = await apiRequest(
//   //   "post",
//   //   "/hr/stat/getUserPerformance",
//   //   {
//   //     dateRangeType: "currentWeek",
//   //     displayWeeklyStats: false,
//   //     from: moment()
//   //       .startOf("week")
//   //       .valueOf(),
//   //     personIds: formPersonsArray(state.vacancies),
//   //     to: moment()
//   //       .endOf("day")
//   //       .valueOf(),
//   //     vacancyIds: state.vacancies.map(({ vacancyId }) => vacancyId)
//   //   }
//   // );

//   res.setHeader("Content-Type", "application/json");
//   res.send(JSON.stringify({ object: { entryList: [] } }));
// });

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
