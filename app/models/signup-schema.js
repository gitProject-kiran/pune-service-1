var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    mobileNumber: Number,
    password: String
  });
module.exports = mongoose.model('user', userSchema);