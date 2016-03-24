/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//                       Model for user - user.js
//==============================================================================

var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamp');
var bcrypt = require('bcrypt');

// define schema for user collection
var userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  firstName: String,
  lastName: String,
  contactInfo: {
    primary_phone: String  
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

// add createdAt/updatedAt field
userSchema.plugin(timestamp);

// hash the password before saving user
userSchema.pre('save', function(next) {
  var user = this;
  
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

// User Model Methods -------------------------------

// Validate user's password.
// Used by Passport-Local Strategy for password validation.
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

//============================EXPORTS====================================

// return instance of model
module.exports = mongoose.model('User', userSchema);