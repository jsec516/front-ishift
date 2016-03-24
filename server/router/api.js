/* global __base */
/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//              Route definitions for the api part of application
//
//==============================================================================

var express = require('express');
var bodyParser = require('body-parser');

// get an instance of express router
var router = express.Router();

// register routers for api
var jwtAuth = require(__base + 'lib/jwt').jwtAuth(); 
router.use(jwtAuth);

// this will let us get the data from a POST
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

// define routes api/***
router.get('/dashboard', function (req, res) {
    res.send('protected area');
});

// appointment routes api/appt/***
var appt = require(__base + 'lib/appt').router();
router.use('/appt', appt);

// resource routes api/resource/***
var rsource = require(__base + 'lib/rsource').router();
router.use('/rsource', rsource);

// vacation routes api/vacation/***
var vaca = require(__base + 'lib/vaca').router();
router.use('/vacation', vaca);

// patient routes api/patient/***
var patient = require(__base + 'lib/pat').router();
router.use('/patient', patient);

// treatment routes api/treat/***
var treat = require(__base + 'lib/treat').router();
router.use('/treat', treat);

// profile routes api/profile/***
var profile = require(__base + 'lib/profile').router();
router.use(profile);

// practitioner routes
var staffs = require(__base + 'lib/staff').router();
router.use('/staff', staffs);

//============================EXPORTS====================================

// Provides the api routers
exports.router = function(){ return router; };