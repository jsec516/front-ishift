/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//                       Model for practitioner - practitioner.js
//==============================================================================

var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamp');

// define schema for practitioner collection
var practitionerSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String
    /*services: [
        {
            _id:Schema.Types.ObjectId,
            name: String 
        }
    ],
    _clinicId: Schema.Types.ObjectId*/
});

// add createdAt/updatedAt field
practitionerSchema.plugin(timestamp);

// hash the password before saving practitioner

// Practitioner Model Methods -------------------------------

//============================EXPORTS====================================

// return instance of model
module.exports = mongoose.model('Practitioner', practitionerSchema);