/* global __base */
/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//                       Staff logic - prac.js
//==============================================================================

var router = require('express').Router();
var bodyParser = require('body-parser');
var Treatment = require(__base + 'model/treatment');
var async = require('async');

//==============================================================================
//                Private, internal helper functions
//==============================================================================

function fetchTreatments(req, res){
    var resources;
    resources = {
        'contents' : 
        [
                {
                    'id': 1,
                    'name': 'Acupuncture',
                    'type': 'regular',
                    'schedulable': true,
                    'duration': 90,
                    'buffers': 20,
                    'color': '#333',
                    'status': 1
                },
                {
                    'id': 2,
                    'name': 'Have Appointment',
                    'type': 'personal',
                    'schedulable': false,
                    'duration': 90,
                    'buffers': 20,
                    'color': '#000',
                    'status': 0
                }
            ],
            'actions': {
                'canEdit': {url: '/#/service/edit/'},
                'canCreate': {url: '/#/service/create/'}
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
router.get('/', function (req, res) {
    var result;
    result = { 'success': true, 
    'message': fetchTreatments(req, res)};
    
    res.send(result);
    
});

//============================EXPORTS====================================
// Provides the router for treatment
exports.router = function () { return router; };