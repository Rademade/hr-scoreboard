#!/usr/bin/env node

const program = require('commander');
const axios = require('axios');
const SessionModel = require('../models/session').SessionModel;
const dotenv = require('dotenv').config({path: '../.env.local'});
const db = require('../config/db');
const mongoose    = require('mongoose');

let deleteSession = () => {
  return SessionModel.remove({}, function (err) {
    console.log(err);
  });
};

let addSession = () => {
  axios.post('https://cleverstaff.net/hr/person/auth', {
    login: process.env.USER_LOGIN,
    password: process.env.USER_PASSWORD
  }).then(function (resp) {
    let cookie = resp.headers['set-cookie'][0].split(/JSESSIONID\=(.*?);/ig)[1];
    let session = new SessionModel({
      value: cookie
    });

    session.save(function (err) {
      if (err) throw err;
      if(!err)   mongoose.disconnect();
      console.log('Session successfully saved.');
    });
  });
};

program
  .version('0.0.1')
  .action(deleteSession())
  .parse(process.argv);

program
  .version('0.0.1')
  .action(addSession())
  .parse(process.argv);