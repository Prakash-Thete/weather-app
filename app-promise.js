const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch the weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geoCodeApiUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=TPzpWubEV7Qc9A9M8R4Fakw98qekQQA0&location=${encodedAddress}`;

axios.get(geoCodeApiUrl).then((response) => {
  if (!response.data) {
    throw new Error('Unable to find that address');
  }

  var lat = response.data.results[0].locations[0].latLng.lat;
  var lng = response.data.results[0].locations[0].latLng.lng;
  var weatherApiUrl = `https://api.darksky.net/forecast/67b09282e10a0737b3404ad4d631fc2c/${lat},${lng}`;
  return axios.get(weatherApiUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`Its currently ${temperature}. But feels like ${apparentTemperature}`);
}).catch((error) => {
  if (error.code === 'ENOTFOUND') {
    console.log('Requested Resource not found');
  } else {
    console.log(error.message);
  }
});
