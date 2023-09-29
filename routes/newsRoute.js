const express = require('express');
const news = require('../controller/news');
const router = express.Router();

router.get("/", news.getAllNews);
router.get("/detail/:idnews", news.getDetailNews);

module.exports = router;