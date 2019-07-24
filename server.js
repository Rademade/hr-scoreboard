const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const port = process.env.PORT || 8080;
const app = express();

app.use(favicon(__dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/ping', (req, res) => {
 return res.send('pong');
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "build', 'index.html"));
});

app.get("/hr/person/auth", (req, res) => {
  console.log("aaaa", req, res);
});

app.listen(port);