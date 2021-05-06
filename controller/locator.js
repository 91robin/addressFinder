'use strict'

const Service = require('../service');

class Locator {
    constructor() {
        this.serviceLocator = new Service.locator()
    }
    async getAddressForLocation(req, res, next) {
        let input = req.body;

        if (req.query['location']) {
            input['locations'] = [req.query['location']];
        }
        if (!input['locations']) {
            return next({ status: 412, message: 'Invalid Input' });
        }
        try {
            ;
            let result = await serviceLocator.getAddressForLocations(input['locations']).catch((err) => {
                throw err;
            });
            req.returnResponse = result;
            return next();
        } catch (err) {
            if (!('status' in err)) {
                console.log('getAddressForLocation failed: ', input)
                console.lo("err locator service: ", err);
                err = { status: 500, message: 'Internal Server Error' };
            }
            return next(err);
        }
    }
}

module.exports = Locator;