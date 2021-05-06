'use strict'

const API = {
    'local': {
        GOOGLE_ADDRESS_API_URL: 'https://www.google.com' //address/locator.....
    },
    'dev': {
        GOOGLE_ADDRESS_API_URL: 'https://www.google.com' //address/locator.....
    },
    'test': {
        GOOGLE_ADDRESS_API_URL: 'https://www.google.com' //address/locator.....
    },
    'staging': {
        GOOGLE_ADDRESS_API_URL: 'https://www.google.com' //address/locator.....
    },
    'production': {
        GOOGLE_ADDRESS_API_URL: 'https://www.google.com' //address/locator.....
    }
};
module.exports = API[process.env.ENV];
