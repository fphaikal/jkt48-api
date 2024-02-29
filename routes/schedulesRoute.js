const express = require("express");
const schedule = require("../controller/schedules");
const router = express.Router();

router.get("/", schedule.getSchedule);
router.get("/2", schedule.getSchedule2)
module.exports = router;
