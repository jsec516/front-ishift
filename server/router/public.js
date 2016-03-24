/* global __base */
/// <reference path="../../typings/main.d.ts" />
"use strict";

//==============================================================================
//              Route definitions for the api part of application
//
//==============================================================================

var express = require('express');
var bodyParser = require('body-parser');
var setRender = require('middleware-responder').setRender;
var setRedirect = require('middleware-responder').setRedirect;

// get an instance of express router
var router = express.Router();

// this will let us get the data from a POST
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

// Provide webtoken generation facilities
// ( Make sure it is OUTSIDE of the protected scope ...)
var jwtPublicRouters = require(__base + 'lib/jwt').router();
router.use('/jwt', jwtPublicRouters);
var authPublicRouters = require(__base + 'lib/auth').router();
router.use(authPublicRouters);

// Other routes
router.get('/about', function (req, res) {
    res.send('hello');
});

        
//============================EXPORTS====================================

// Provides the public routers
exports.router = function(){ return router; };