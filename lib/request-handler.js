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
    console.log('successful insert into promises from initialize');
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

exports.insertPromise = function(req, res) {
  console.log('inserting a promise from POST request');
  console.log('req.body', req.body);
  var promiseOptions = {};
  promiseOptions.byUser = req.body.byUser || '';
  promiseOptions.toUser = req.body.toUser || '';
  promiseOptions.description = req.body.description || '';
  promiseOptions.status = req.body.status || 'waiting approval';
  promiseOptions.pointValue = req.body.pointValue || 1;

  var newPromise = new mPromise(promiseOptions);
  newPromise.save(function (err, fluffy) {
    if (err) {
      return console.error(err);
    }
    console.log('successful insert into promises', promiseOptions);
  });

  res.redirect(301, '/'); 
};

exports.acceptPromise = function(req, res) {
  console.log('entering acceptPromise');
  mPromise.update({ _id: req.body.id }, { $set: { status: 'in progress' }}, function() {
    res.sendStatus(201);
  });
};

exports.rejectPromise = function(req, res) {
  console.log('Entering rejectPromise');
  mPromise.update({ _id: req.body.id }, { $set: { status: 'rejected' }}, function() {
    res.sendStatus(201);
  });
};

