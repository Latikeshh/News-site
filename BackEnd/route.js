const express = require('express');
const router = express.Router();
const Controller = require('./Controller');

// Create a new note
router.post('/createNews', Controller.createNews);

// Get all notes
router.get('/getNews', Controller.getNews);

// ✅ FIXED: Use GET for fetching a single note
router.get('/getNewss/:_id', Controller.getNewsById);

// Update a note
router.put('/updateNews/:_id', Controller.updateNews);

// Soft delete (mark as deleted)
router.put('/deleteNews/:_id', Controller.softDeleteNews);

// Hard delete (permanently remove)
router.delete('/harddeleteNews/:_id', Controller.deleteNews);

module.exports = router;
