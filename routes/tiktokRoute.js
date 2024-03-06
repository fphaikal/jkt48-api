const express = require('express');
const tiktok = require('../controller/tiktok');
const router = express.Router();

router.get("/:member", tiktok.getData);


module.exports = router;