const express = require("express");
//const validateId = require("../middleware/validateId");
const router = express.Router();
const {
  getInfoByCityName,
  //function from the weather.js
} = require("../controllers/weather");
//const { Router } = require("express");
router.get("", getInfoByCityName);
module.exports = router;
