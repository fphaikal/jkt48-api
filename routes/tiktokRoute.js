const express = require("express");
const Tiktok = require("../controller/tiktok");
const router = express.Router();
const fs = require("fs");

router.get("/:username", Tiktok.getData);

module.exports = router;
