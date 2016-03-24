/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//                   Model for appointment - appointment.js
//==============================================================================

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamp');

// define schema for appointment collection
var apptSchema = new Schema({
    user: {
        _id: Schema.Types.ObjectId,
        email: String,
        firstName: String,
        lastName: String
    },
    service: {
        _id: Schema.Types.ObjectId,
        name: String
    },
    practitioner: {
        _id: Schema.Types.ObjectId,
        name: String
    },
    date: Date,
    time: Number,
    reminder: String,
    additionalInfo: {
        comment: String,
        dateTime: String
    }
});

// add createdAt/updatedAt field
apptSchema.plugin(timestamp);

// hash the password before saving user
apptSchema.pre('save', function (next) {
    //   var appt = this;
    // perform pre validation here
});

//============================EXPORTS====================================

// return instance of model
module.exports = mongoose.model('Appointment', apptSchema);
