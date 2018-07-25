const express = require('express');
const router = express.Router();
const {CleaverStaffApiService} = require('../services/cleaverstaff-api');

router.post('/vacations', function (req, res) {
  CleaverStaffApiService.loadVacancies(res);

});

module.exports = router;
