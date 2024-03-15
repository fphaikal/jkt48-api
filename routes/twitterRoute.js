const express = require("express");
const router = express.Router();
const fs = require("fs");
const Twitter = require("../controller/twitter");

router.get("/:username", Twitter.getData);


module.exports = router;
