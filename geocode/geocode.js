const request = require('request');

var geocodeAddress = (address, callback) => {
  let encodedAddress = encodeURIComponent(address);
  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=TPzpWubEV7Qc9A9M8R4Fakw98qekQQA0&location=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    console.log("body :: ", JSON.stringify(body));
    var result = {
      latitude: body.results[0].locations[0].latLng.lat,
      longitude: body.results[0].locations[0].latLng.lng
    }

    callback(undefined, result);
  });
}

module.exports.geocodeAddress = geocodeAddress;
