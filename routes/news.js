const express = require('express');
const router = express.Router();
const {
  NewsController
} = require('../controllers/NewsController');

router.get("/", NewsController.getNews);

module.exports = router;