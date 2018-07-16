const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;

const Session = new Schema({
  value: String,
});

const SessionModel = mongoose.model('Session', Session);

module.exports.SessionModel = SessionModel;