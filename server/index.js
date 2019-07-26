const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.post("/hr/person/auth", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ user: { personId: 1 } }));
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
