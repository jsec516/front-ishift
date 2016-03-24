/* global __base */
/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//                       Vacation logic - rsource.js
//==============================================================================

var router = require('express').Router();
var bodyParser = require('body-parser');
var Vacation = require(__base + 'model/vacation');
var async = require('async');

//==============================================================================
//                Private, internal helper functions
//==============================================================================

function fetchVacations(req, res){
    var vacations;
    vacations = {
        'contents' : 
        [
                {
                    'id': 1,
                    'staff': 'all',
                    'start_date': '12/02/2016',
                    'end_date': '15/02/2016',
                    'reason': 'General Holiday',
                    'comments': ''
                },
                {
                    'id': 1,
                    'staff': 'Mr. X',
                    'start_date': '03/02/2016',
                    'end_date': '05/02/2016',
                    'reason': 'Special Vacation',
                    'comments': 'Day out with family'
                }
            ],
            'actions': {
                'canEdit': {url: '/#/vacation/edit/'},
                'canCreate': {url: '/#/vacation/create/'}
            }
    };
    return vacations;
}
//==============================================================================
//                        Route management
//==============================================================================

// this will let us get the data from a POST
// either urlencoded, or in json
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


// get the list of all appointments
router.get('/', function(req, res){
    var result;
    result = { 'success': true, 
    'message': fetchVacations(req, res)};
    
    res.send(result);
});


//============================EXPORTS====================================
// Provides the router for resources
exports.router = function () { return router; };