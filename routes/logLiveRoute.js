const express = require('express');
const LogLives = require('../controller/logLive');
const router = express.Router();

router.get('/', LogLives.getLogLive)
router.get('/:id', LogLives.getLogLiveDetail)

module.exports = router;