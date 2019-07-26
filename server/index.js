const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.post("/hr/person/auth", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ object: { personId: 1 } }));
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
