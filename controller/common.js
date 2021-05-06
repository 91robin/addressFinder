'use strict'

const Common = {
    respond: function (req, res, next) {
        /*if (!req.returnResponse.status && !req.doNotSendStatus) {
            req.returnResponse.status = Utility.constant.SUCCESS_RETURN_CODE;
        }*/
        res.json(req.returnResponse);
    },
    handleError: function (err, req, res, next) {
        //This function will handle all kind of Application Error, please keep it below all other routes
        console.log('Error found in thread: ' + (req.query.logthreadId || ''), JSON.stringify(err));
        Object.keys(err).forEach(function (key) {
            req.returnResponse[key] = err[key];
        });
        if ((!'status' in req.returnResponse) || isNaN(req.returnResponse.status)) {
            req.returnResponse.status = 500;
        }
        res.status(req.returnResponse.status);
        res.json(req.returnResponse);
    }
};
module.exports = Common;