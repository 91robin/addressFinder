const Model = require('../model');
const Config = require('../config');

class LocatorService {
    constructor() { }
    async callAddressByLocationApi(locationObj) {
        return await Model.callApi.post(Config.apiConstant.GOOGLE_ADDRESS_API_URL, { lat: locationObj['lat'], lon: locationObj['lon'] });
        //call Google Api and return address if found, parallely save in db
    }
    async getNearByLocations(locationObj) {
        return await Model.locator.nearBy(locationObj, Config.constant.LOCATOR.SEARCH_DISTANCE_DEFAULT);
    }
    async getAddressForLocations(locationObj) {
        //Below is pseudo code, syntax might be in correct
        let addressObj = {};
        Object.keys(forEach(function (location) {
            addressObj[location['lat'] + "," + location['lon']] = null;
            let locations = await this.getNearByLocations(location);
            if (locations.length > 0) {
                addressObj[location['lat'] + "," + location['lon']] = locations[0].address; //returning first result's address by default: this logic can be changed to provide more accurate address
            } else {
                let address = await callAddressByLocationApi(location);//Assuming address can be null from google API
                addressObj[location['lat'] + "," + location['lon']] = address
            }
        }));
        return addressObj;
    }
}
module.exports = LocatorService;
