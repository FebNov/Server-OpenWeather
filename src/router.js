const express = require("express");
const weatherRouter = require("./routes/weather");
const router = express.Router();
router.use("", weatherRouter);
module.exports = router;
