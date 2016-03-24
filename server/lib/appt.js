/* global __base */
/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//                       Appointment logic - appt.js
//==============================================================================

var router = require('express').Router();
var bodyParser = require('body-parser');
var Appointment = require(__base + 'model/appointment');
var Practitioner = require(__base + 'model/staff');
var Service = require(__base + "model/treatment");
var async = require('async');

//==============================================================================
//                Private, internal helper functions
//==============================================================================

function saveAppt(req, res, done) {
    // console.log(req.body);
    req.assert('service', 'Please select a service.').isValidService();

    var errors = req.validationErrors();
    if (errors) {
        return done(errors, null);
    }

    // save appointment
    var doSave = function () {

        var tasks = {
            // fetch service record
            service: function (callback) {
                console.log('service callback calling');
                Service.findOne({
                    name: req.body.service
                }, function(err, service){
                    console.log('service processing finished');
                    if(err) { return callback(err); }
                    callback(null, 1);    
                });
            },
            
            // fetch practitioner record
            pracitioner: function (callback) {
                Practitioner.findOne({
                    firstName: 'tada'
                }, function(err, practitioner){
                    if(err) { return callback(err); }
                    callback(null, 2);    
                });
            }
        };

        // process result of series operation
        // results.service is service record
        // result.practitioner is practitioner record
        // call done method with success method if everything ok
        // call done with error if something wrong
        var callback = function (err, results) {
            if(err) { return done(err); }
            console.log('final result is : ', results);
            // console.log(results);
            return done(null, 'Appointment created successfully');
        };
        
        // save appointment
        async.series(tasks, callback);

    }

    process.nextTick(doSave);
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
router.post('/save', function (req, res) {
    // console.log('head ', req.head);
    // console.log('body ', req.body);
    // TODO need to change with configuration 
    saveAppt(req, res, function (err, message) {
        var result;

        if (err) {
            result = { 'success': false, 'message': err };
        } else {
            result = { 'success': true, 'message': message };
        }

        res.send(result);
    });
});

// get the list of all appointments
router.get('/', function(req, res){
    var result;
    result = { 'success': true, 
    'message': [
        {
            'id':1, 
            'clinic_id': 2,
            'patient': {'id': 1, 'name': 'jahidul islam'}, 
            'staff': {'id': 1, 'name': 'Ibn sina'},  
            'service': {'duration': '120', 'name': 'Acupuncture', 'color': '#00a65a'},
            'schedule': {'from': '12:00AM', 'to': '12:00PM'},
            'other' : {'cancel_reason': ''},
            'type': 'regular',
            'status': 'upcoming',
            'created_at': '',
            'updated_at': ''
        },
        {
            'id':2, 
            'clinic_id': 2,
            'patient': {'id': 1, 'name': 'akrabul islam', avatarUrl: '/assets/uploads/user/avatar.png'}, 
            'staff': {'id': 1, 'name': 'Ibn sina'},  
            'service': {'duration': '120', 'name': 'Acupuncture', 'color': '#dd4b39'},
            'schedule': {'from': '12:00AM', 'to': '12:00PM'},
            'other' : {'cancel_reason': ''},
            'type': 'regular',
            'status': 'upcoming',
            'created_at': '',
            'updated_at': ''
        },
        {
            'id':3, 
            'clinic_id': 2,
            'patient': {'id': 1, 'name': 'jahidul islam'}, 
            'staff': {'id': 1, 'name': 'Ibn sina'},  
            'service': {'duration': '120', 'name': 'Acupuncture', 'color': '#00c0ef'},
            'schedule': {'from': '12:00AM', 'to': '12:00PM'},
            'other' : {'cancel_reason': ''},
            'type': 'regular',
            'status': 'upcoming',
            'created_at': '',
            'updated_at': ''
        },
        {
            'id':4, 
            'clinic_id': 2,
            'patient': {'id': 1, 'name': 'akrabul islam', avatarUrl: '/assets/uploads/user/avatar.png'}, 
            'staff': {'id': 1, 'name': 'Ibn sina'},  
            'service': {'duration': '120', 'name': 'Acupuncture', 'color': '#00c0ef'},
            'schedule': {'from': '12:00AM', 'to': '12:00PM'},
            'other' : {'cancel_reason': ''},
            'type': 'regular',
            'status': 'upcoming',
            'created_at': '',
            'updated_at': ''
        }
    ]};
    
    res.send(result);
});

// get the statistics data of appointment
router.get('/stats', function(req, res){
   var barData = {
            data: [["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9]],
            color: "#3c8dbc"
        }; 
        var result = {'success': true, 'message': barData};
        res.send(result);
});

//============================EXPORTS====================================
// Provides the router for authentications
exports.router = function () { return router; };