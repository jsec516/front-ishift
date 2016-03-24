/* global __appRoot */
/* global __base */
'use strict';
/*============================================================================
                          Application setup
==============================================================================*/

// global variable to set relative path from /server/
global.__base = __dirname + '/';

// call the packages we need
var express = require('express');
var expressValidator = require('express-validator');
var cors = require('cors');  
var url = require('url');
var config = require(__base + 'conf/env.conf');

// define our application using express
var app = express();                
var db = require(__base + "lib/db");

// Register static route for client files when /static/**** is route
var compression = require('compression');

app.use('/node_modules', compression()); //use compression 
app.use('/node_modules', express.static(__appRoot + '/node_modules'));
app.use('/dist', compression()); //use compression 
app.use('/dist', express.static(__appRoot + '/dist'));
app.use('/', compression()); //use compression 
app.use('/', express.static(__appRoot + '/dist'));

// MIDDLEWARES
var validatorObj = require(__base + "lib/validator");
app.use(expressValidator({customValidators: validatorObj.validators}));

// enable cors
app.use(cors());

// REGISTER OUR ROUTES -------------------------------

// register public routes
var publicRouter = require(__base + "router/public").router();
app.use(publicRouter);

// register api routes
var apiRouter = require(__base + 'router/api').router();
app.use('/api', apiRouter);


// ========================= Export application ==============================
exports.app = function(){ return app; } 