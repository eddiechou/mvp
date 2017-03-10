var mongoose = require('mongoose');

// User schema/model
var userSchema = mongoose.Schema({
  username: {type: String, required: true, index: { unique: true } },
  password: {type: String, required: true},
  totalPoints: {type: Number, required: true},
  rank: String  // grasshopper, student, counselor/master/sage
});

var mUser = mongoose.model('User', userSchema);

module.exports = mUser;