/* global __base */
/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//                       JWT logic - jwt.js
//==============================================================================

var router = require('express').Router();
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
var conf = require('../conf/jwt.conf');
var User = require(__base + 'model/user');

//==============================================================================
//                Private, internal helper functions
//==============================================================================

//------------------------------------------------------------------------------
// Check user credentials. Return payload if ok, null if not.
// Payload can be any valid truthy object.
// Adjust as needed to control access ...
function checkUser(user, password, done) {

    // Ultra simple user/password verification - ovrerride as needed !
    if (!user || !password) return null;

    // Fetch for valid user
    User.findOne({ 'email': user },
        function (err, user) {
            // console.log('02- fetched user', user);
            if (err) return done(err);
            if (!user) {
                // console.log('03- not found', user);
                return done('User not found', false);
            }
            user.comparePassword(password, function (err, isMatch) {
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done('Password does not match', false);
                }
            });
        }
        );
    // Need to replace with db fetch
    // if (conf.access[user] != password) return null;

    // return the payload will other credentials as needed ...
    // NEVER return the submitted password ;-)
}

//------------------------------------------------------------------------------
// Provides a webtoken as a string
function createToken(user, password, done) {
    // console.log('01-token create request with :', user);
    checkUser(user, password, generate);
    
    // generate callback which will process fetched data
    // to create token
    function generate(err, data) {
        // console.log('04- generate request', err);
        if (err) { return done(err, null); }

        var token = jwt.sign(data, conf.privateKey, conf.optionsign);
        var tokenInfo = {token: token, expires: conf.expireSecond};
        return done(null, tokenInfo);
    }
}

//------------------------------------------------------------------------------
// Returns the decoded payload if ok, null if not ok
function checkToken(t) {
    if (!t) return null;
    try {
        var decoded = jwt.verify(t, conf.privateKey, conf.optionverify);
        return decoded;
    } catch (err) {
        console.log("Token(" + t + ") was not recognized : ", err);
        return null;
    }
}

//==============================================================================
//                        Route management
// Verification is using the header "Authorization: Bearer xxxxx.yyy.zzzz"
// All routers access request need a "Content-Type: application/json header".
//==============================================================================

// this will let us get the data from a POST
// either urlencoded, or in json
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Process a webToken request.
// { user:lkjlkj, password:lkjlkjlkj } with Content-Type header: application/json
// or user and password as x-www-form-urlencoded values in POST body
// Returns text of the token as text,
// or null if invalid credentials are provided
router.post('/', function (req, res) {
    console.log('request jwt body: ', req.body);
    // TODO need to change with configuration 
    createToken(req.body.user, req.body.password, function (err, token) {
        console.log('05- respond request');
        
        var result;
        if (err) { 
            result = { 'success': false, 'message': err }; 
        }else{
            result = { 'success': true, 'message': token };    
        } 
        
        res.send(result);
    });
});

// Middleware - Validate header against jwt token
// and save returned payload in req.payload for later use
function jwtAuth(req, res, next) {
    console.log('checking authentication header ...');
    var t = req.get("Authorization");
    if (!t) {
        res.status(401).send("Not authorized !");
        return;
    }
    t = t.replace(/^[ ]*Bearer[ ]+/, "");
    // console.log("Token : <"+t+">");
    req.payload = checkToken(t);
    if (!req.payload) {
        res.status(401).send("Not authorized !");
    } else {
        console.log("Authorized access for ", req.payload);
        next();
    }
}

//============================EXPORTS====================================
// Provides the middleware to secure (VERIFY) any other router
exports.jwtAuth = function () { return jwtAuth; };
// Provides the router that can GENERATES new tokens
exports.router = function () { return router; };