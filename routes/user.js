"use strict"

const express = require("express");
const ControllerUser = require("../controllers/controlleruser.js");
const router = express.Router();

router.post('/signup', ControllerUser.signup);

module.exports = router;