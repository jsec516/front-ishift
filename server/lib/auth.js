/* global __base */
/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//                       Authentication logic - auth.js
//==============================================================================

var router = require('express').Router();
var bodyParser = require('body-parser');
var User = require(__base + 'model/user');

//==============================================================================
//                Private, internal helper functions
//==============================================================================

function registerUser(req, res, done) {
    // console.log(req.body);
    req.assert('email', 'Please sign up with a valid email.').isEmail();
    console.log(req.body.matching_password);
    req.assert(['matching_password', 'password'], 'Password is required').notEmpty();
    req.assert(['matching_password', 'confirm'], 'Confirm Password').equals(req.body.matching_password.password);

    var errors = req.validationErrors();
    if (errors) {
        return done(errors, null);
    }

    // private function to handle user
    // used in findOrCreateUser
    var handleFetchResult = function (err, existingUser) {
        if (existingUser) {
            return done('An account with that email address already exists.', null);
        }

        var user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.matching_password.password, // user schema pre save task hashes this password
            contactInfo: {
                phone: req.body.phone
            }
        });

        user.save(function (err) {
            if (err) return done('Error saving user.');
            return done(null, "Thanks for signing up!!");
        });
    }
    
    // find or create user if not exist
    var findOrCreateUser = function () {
        User.findOne({ email: req.body.email }, handleFetchResult);
    }

    process.nextTick(findOrCreateUser);
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
router.post('/register', function (req, res) {
    
    // TODO need to change with configuration 
    registerUser(req, res, function (err, message) {
        var result;

        if (err) {
            result = { 'success': false, 'message': err };
        } else {
            result = { 'success': true, 'message': message };
        }

        res.send(result);
    });
});

//============================EXPORTS====================================
// Provides the router for authentications
exports.router = function () { return router; };