const express = require("express");
const schedule = require("../controller/schedules");
const router = express.Router();

router.get("/", schedule.getSchedule);

module.exports = router;
