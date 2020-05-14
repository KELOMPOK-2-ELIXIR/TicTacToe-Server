"use strict"

const express = require("express");
const ControllerUser = require("../controllers/controlleruser.js");
const router = express.Router();

router.post('/signup', ControllerUser.signup);
router.delete('/signup', ControllerUser.delete);
// router.get('/signup/:roomId', ControllerUser.fetchDataBoard)

module.exports = router;