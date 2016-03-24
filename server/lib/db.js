/* global __base */
/* global __base */
/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//                       Database connection logic - db.js
//==============================================================================

var mongoose = require('mongoose');
var config = require(__base + 'conf/env.conf');

// connect mongodb using mongoose
mongoose.connect(config.db);

// CONNECTION EVENTS -------------------------------
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + config.db);
});

// When mongoose failed to connect
mongoose.connection.on('error', function() {
  console.error('Mongoose Connection Error. Make sure MongoDB is running.');
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});