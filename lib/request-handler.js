var request = require('request');

var db = require('../app/config');

var mUser = require('../app/models/user');
var mPromise = require('../app/models/promise');

exports.hello = function(req, res) {
  console.log('hello world from request handler');
};

/*  Promise: 

  byUser: {type: String, required: true},  // promise made by this user
  toUser: {type: String, required: true},  // promise made to this user
  description: {type: String, required: true},  // description of what the Promise was
  initDate: {type: Date, required: true},  // Date the promise was made
  resolveDate: {type: Date, required: true}, // Date the promise must be completed by
  status: String,     // Status of the promise: pending (not accepted by to_user yet) / unresolved (in-process) / resolved (success!) / rejected (unsuccessful)
  pointValue: Number 
*/
exports.initializePromisesTestData = function(req, res) {
  var newPromise = new mPromise({byUser: 'Eddie', toUser: 'Fred', description: 'Graduate Hack Reactor.', status: 'unresolved', pointValue: 15});

  newPromise.save(function (err, fluffy) {
    if (err) {
      return console.error(err);
    }
    console.log('successful insert into promises');
  });
  res.status(200);
};

// Grab all promises in the db and display the description
exports.getPromises = function(req, res) {
  console.log('grabbing promises');
  mPromise.find({}).exec(function(err, links) {
    res.status(200).send(links);
  });
};