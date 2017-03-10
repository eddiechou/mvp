var mongoose = require('mongoose');
// Promise schema/model

var promiseSchema = mongoose.Schema({
  byUser: {type: String, required: true},  // promise made by this user
  toUser: {type: String, required: true},  // promise made to this user
  description: {type: String, required: true},  // description of what the Promise was
  initDate: {type: Date}, //, required: true},  // Date the promise was made
  resolveDate: {type: Date}, //, required: true}, // Date the promise must be completed by
  status: String,     // Status of the promise: pending (not accepted by to_user yet) / unresolved (in-process) / resolved (success!) / rejected (unsuccessful)
  pointValue: Number // the amount of points this promise is worth
});

var mPromise = mongoose.model('Promise', promiseSchema);

module.exports = mPromise;