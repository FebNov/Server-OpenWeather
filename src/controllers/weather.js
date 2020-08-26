const weatherModel = require("../models/weather");

function getInfoByCityName(req, res) {
  const { city, countryCode } = req.query;
  weatherModel.getInfoByCityName(city, countryCode).then((passToController) => {
    console.log(passToController);
    //  console.log(info);
    return res.json(passToController);
  });
}

module.exports = {
  getInfoByCityName,
};
