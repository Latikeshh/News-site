const express = require('express');
const router = express.Router();
const newsController = require('../controller/newsController');

// Create a news article
router.post('/addnews', newsController.createNews);

// Get all news articles (supports pagination via query params)
router.get('/getnews', newsController.getNews);

// Get a specific news article by ID
router.get('/newsof/:_id', newsController.getNewsById);

// Update a news article by ID
router.put('/newsup/:_id', newsController.updateNews);

// Soft delete a news article by ID
router.put('/newsoft/:_id', newsController.softDeleteNews);

// Hard delete a news article by ID
router.delete('/news/hard/:_id', newsController.deleteNews);

module.exports = router;
