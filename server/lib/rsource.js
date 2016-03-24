/* global __base */
/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//                       Resources logic - rsource.js
//==============================================================================

var router = require('express').Router();
var bodyParser = require('body-parser');
var Resource = require(__base + 'model/resource');
var async = require('async');

//==============================================================================
//                Private, internal helper functions
//==============================================================================

function fetchResources(req, res){
    var resources;
    resources = {
        'contents' : 
        [
                {
                    'id': 1,
                    'title': '101 (A)',
                    'status': 1
                },
                {
                    'id': 2,
                    'title': '101 (B)',
                    'status': 1
                }
            ],
            'actions': {
                'canEdit': {url: '/#/resource/edit/'},
                'canCreate': {url: '/#/resource/create/'}
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


// get the list of all appointments
router.get('/', function(req, res){
    var result;
    result = { 'success': true, 
    'message': fetchResources(req, res)};
    
    res.send(result);
});


//============================EXPORTS====================================
// Provides the router for resources
exports.router = function () { return router; };