/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//                       Model for user - user.js
//==============================================================================

var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamp');

// define schema for user collection
var serviceSchema = new Schema({
    name: String,
    _clinicId: Schema.Types.ObjectId
});

// add createdAt/updatedAt field
serviceSchema.plugin(timestamp);

// hash the password before saving user

// Service Model Methods -------------------------------

//============================EXPORTS====================================

// return instance of model
module.exports = mongoose.model('Service', serviceSchema);