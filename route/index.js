
'use strict'
const Controller = require('../controller');

var Locator = new Controller.locator();

const RouteURLs = function (app) {
     //Below function will initiate an empty response object for all APIs
     app.all("*", function (req, res, next) {
          req.returnResponse = {}; //We initialised it to store any success response
          req.returnResponse.error = {};
          if (!req['threadId']) { //purpose of threadId is to track logs of an HTTP req. along multiple microservices
               req['threadId'] = 1;//create random thread id here, can be based on current timestamp
          }
          return next();
     });

     app.post('/addressForLocation', Locator.getAddressForLocation, Controller.common.respond, Controller.common.handleError);
};
module.exports = RouteURLs;
