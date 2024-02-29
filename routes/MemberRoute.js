const express = require('express');
const Member = require('../controller/member');
const router = express.Router()

router.get('/', Member.getMemberProfile)
router.get('/:name', Member.getMemberProfileDetail)

module.exports = router