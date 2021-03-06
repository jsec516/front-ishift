/* global __base */
/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//                       Staff logic - prac.js
//==============================================================================

var router = require('express').Router();
var bodyParser = require('body-parser');
var Staff = require(__base + 'model/staff');
var User = require(__base + 'model/user');
var async = require('async');

//==============================================================================
//                Private, internal helper functions
//==============================================================================

function fetchPatients(req, res){
    var resources;
    resources = {
        'contents' : 
        [
                {
                    'id': 1,
                    'name': 'Mr. A',
                    'email': 'test@gmail.com',
                    'home_phone': 'xxxxxxxx',
                    'mobile_phone': 'xxxxxxxx',
                    'status': 0
                },
                {
                    'id': 1,
                    'name': 'Mr. B',
                    'email': 'test2@gmail.com',
                    'home_phone': 'xxxxxxxx',
                    'mobile_phone': 'xxxxxxxx',
                    'status': 1
                }
            ],
            'actions': {
                'canEdit': {url: '/#/patient/edit/'},
                'canCreate': {url: '/#/patient/create/'}
            }
    };
    return resources;
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
router.get('/search', function (req, res) {
    var result;
    result = { 'success': true, 
    'message': fetchPatients(req, res)};
    
    res.send(result);
    
});

//============================EXPORTS====================================
// Provides the router for authentications
exports.router = function () { return router; };