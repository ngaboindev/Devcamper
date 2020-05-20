const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "mapquest",
  httpAdapter: "https",
  apiKey: "pGCoYmpZB2HSwehCHRurwRPNgcPj77f0",
  formatter: null,
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
