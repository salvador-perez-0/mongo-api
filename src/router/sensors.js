const express = require("express");
const router = express.Router();
const sensorsController = require("../controller/sensors.controller");

router.use("/");

module.exports = { router };
