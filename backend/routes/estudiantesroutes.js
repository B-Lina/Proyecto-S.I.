const express = require("express");
const router = express.Router();
const estudiantesmodelo = require("../model/estudiantesmodelo.js");
router.post("/",estudiantesmodelo.ingresar);
module.exports = router;