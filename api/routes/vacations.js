const express = require('express');
const router = express.Router();
const SessionModel = require('../models/session').SessionModel;
const { CleaverstaffApiService } = require('../services/cleaverstaff-api');

router.post('/vacations', function (req, res) {
  SessionModel.find().then(data => {
    CleaverstaffApiService.loadVacancies(res, data[0].value);
  });

});

module.exports = router;
