
var validService = function(value){
    // console.log("service is ", value);
    return true;
}

//============================EXPORTS====================================
// Provides the middleware to secure (VERIFY) any other router
exports.validators = { 
    isValidService: validService
};