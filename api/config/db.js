const dotenv = require('dotenv').config({path: './.env.local'});

const mongoose    = require('mongoose');
mongoose.connect(process.env.DATABASE);

const db = mongoose.connection;

db.on('error', function (err) {
  console.log('connection error:', err.message);
});

db.once('open', function callback () {
  console.log('Connected to DB!');
});


module.exports.db = db;