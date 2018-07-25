require('dotenv').config({path: '../.env.local'});
require('../config/db');

const axios = require('axios');
const mongoose    = require('mongoose');
const { SessionModel } = require('../models/session');

class CleaverStaffApiService {
  auth() {
    return axios.post('https://cleverstaff.net/hr/person/auth', {
      login: process.env.USER_LOGIN,
      password: process.env.USER_PASSWORD
    });
  }

  updateAuthCookie(callback) {
    this.auth().then((resp) => {
      let cookie = resp.headers['set-cookie'][0].split(/JSESSIONID=(.*?);/ig)[1];
      let session = new SessionModel({
        value: cookie
      });

      session.save(function (err) {
        if (err) throw err;
        if(!err) mongoose.disconnect();
        callback();
      });
    });
  }

  removeAuthCookie(callback) {
    return SessionModel.remove({}, callback());
  }

  loadVacancies(res) {
    return SessionModel.find().then((data) => {
      axios
        .post(
          'https://cleverstaff.net/hr/client/get',
          {country: null, city: null, name: null},
          {headers: {'Cookie': 'JSESSIONID=' + data[0].value}}
        )
        .then((resp) => {
          return res.json(resp.data.objects);
        })
        .catch(error => {
          console.log(error);
        });
    });


  }
}

module.exports.CleaverStaffApiService = new CleaverStaffApiService();