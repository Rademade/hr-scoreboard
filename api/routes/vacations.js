const express = require('express');
const axios = require('axios');
const router = express.Router();
const SessionModel = require('../models/session').SessionModel;

let getData = function (res, cookie) {
  axios
    .post(
      'https://cleverstaff.net/hr/client/get',
      {country: null, city: null, name: null},
      {headers: {'Cookie': 'JSESSIONID=' + cookie}}
    )
    .then((resp) => {
      return res.json(resp.data.objects);
    })
    .catch(error => {
      res.json(error);
    });
};

router.post('/vacations', function (req, res) {
  SessionModel.find().then(data => {
    getData(res, data[0].value);
  });

});

module.exports = router;
