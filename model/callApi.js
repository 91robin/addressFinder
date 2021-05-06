'use strict'
//We can use Axios module or any other similar library to make requests, as the "request" library is no longer supported
const Request = require('request');

var CallApi = {
    post: async function (input) {
        try {
            return new Promise((resolve, reject) => {
                Request.post({ url: input.url, headers: input.headers, body: input.body, json: true, timeout: (input.timeout || 5000) }, function (err, response, body) {
                    if (err) {
                        reject(err);
                    }
                    return resolve(body);
                });
            });
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = CallApi;