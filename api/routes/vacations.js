const express = require('express');
const axios = require('axios');
const router = express.Router();
const dotenv = require('dotenv').config({path: './.env.local'});
const SessionModel = require('../models/session').SessionModel;

const data = {
  country: null,
  city: null,
  name: null
};

let createSessionId = function (cookie) {
  let session = new SessionModel({
    value: cookie
  });
  session.save(function (err) {
    if (err) throw err;
    console.log('Session successfully saved.');
  });
};

let deleteSessionId = function () {
  return SessionModel.remove({}, function (err) {
    console.log(err);
  });
};

let getData = function (res, cookie) {
  let config = {
    headers: {
      'Cookie': 'JSESSIONID=' + cookie,
    }
  };
  axios.post('https://cleverstaff.net/hr/client/get', data, config).then((resp) => {
    return res.json(resp.data);
  }).catch(error => {
    if(error.response.status === 403) {
      deleteSessionId();
      getSessionId(res);
    }
    console.log(error.response.status);
  });
};
let getSessionId = function(res) {
  axios.post('https://cleverstaff.net/hr/person/auth', {
    login: process.env.USER_LOGIN,
    password: process.env.USER_PASSWORD
  }).then(function (resp) {
    let cookie = resp.headers['set-cookie'][0].split(/JSESSIONID\=(.*?);/ig)[1];
    createSessionId(cookie);
    getData(res, cookie);
  });
};

router.post('/vacations', function (req, res) {

  SessionModel.find().then(data => {
    if (data.length == 0) {
      getSessionId(res);
    } else {
      getData(res, data[0].value);
    }
  });
});

module.exports = router;
