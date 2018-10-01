const request = require('request');

var geocodeAddress = (address) => {
  let encodedAddress = encodeURIComponent(address)

  return new Promise((resolve, reject) => {
    request({
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=TPzpWubEV7Qc9A9M8R4Fakw98qekQQA0&location=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if (body) {
        var result = {
          latitude: body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng
        };
        resolve(result);
      } else {
        reject('Failed to load the geolocation');
      }
    });
  })
};

geocodeAddress('413714 India').then((location) => {
  console.log("location ", location);
}).catch((errorMessage) => {
  console.log("errorMessage ", errorMessage);
});
