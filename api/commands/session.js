#!/usr/bin/env node
const program = require('commander');
const {CleaverStaffApiService} = require('../services/cleaverstaff-api');

let deleteSession = () => {
  CleaverStaffApiService.removeAuthCookie(() => console.log('Cookie successfully removed.'));
};

let createSession = () => {
  CleaverStaffApiService.updateAuthCookie(() => console.log('Cookie successfully created.'));
};

program
  .version('0.0.1')
  .action(deleteSession())
  .parse(process.argv);

program
  .version('0.0.1')
  .action(createSession())
  .parse(process.argv);