/* global __base */
/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//                       User logic - appt.js
//==============================================================================

var router = require('express').Router();
var bodyParser = require('body-parser');
var User = require(__base + 'model/user');
var async = require('async');

//==============================================================================
//                Private, internal helper functions
//==============================================================================

function getProfile(req, res, done) {
    // console.log('payload', req.payload._doc._id);
    if(req.params.id==='bearer'){
        req.params.id = req.payload._doc._id;
    }
    
    var handleFetchResult = function (err, user) {
        if (err) { return done(err); }
        if (user) {
            return done(null, user);
        }
        
        return done('User not found');
    };
    
    // fetch profile
    var doFetch = function () {
        User.findOne({_id: req.params.id}, handleFetchResult)
    }

    process.nextTick(doFetch);
}

//==============================================================================
//                        Route management
//==============================================================================

// this will let us get the data from a POST
// either urlencoded, or in json
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Process a user registration request.
// user related data as x-www-form-urlencoded values in POST body
// Register user, send success message,
// or error message if registration failed
router.get('/profile/:id', function (req, res) {
    
    getProfile(req, res, function (err, message) {
        var result;

        if (err) {
            result = { 'success': false, 'message': err };
        } else {
            result = { 'success': true, 'message': message };
        }

        res.json(result).end();
    });
});

//============================EXPORTS====================================
// Provides the router for authentications
exports.router = function () { return router; };