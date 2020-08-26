/*
const weatherModel = require("../models/weather");
module.exports = function (req, res, next) {
  let { id } = req.params;
  id = Number(id);
  //need modify after weather
  //if (weatherModel.getPostIndexById(id) === -1) {
    return res.sendStatus(404);
 // }
  req.params.id = id;
  next();
};
*/
