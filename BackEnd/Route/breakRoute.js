const express = require('express');
const router = express.Router();
const breakingController = require('../Controller/breakController');

// Create new breaking news
router.post('/addbreaking', breakingController.createBreaking);

// Get only non-soft deleted (Frontend)
router.get('/getbreaking', breakingController.getActiveBreaking);

// Get all including deleted (Admin)
router.get('/breaking/admin', breakingController.getAllBreaking);

// Update breaking news text
router.put('/breaking/:id', breakingController.breakingUpdate);

// Soft delete breaking news
router.put('/breaking/softdelete/:id', breakingController.softDeleteBreaking);

// Recover breaking news
router.put('/breaking/recover/:id', breakingController.recoverBreaking);
//count show 
router.get('/breakingcount', breakingController.getTotalBreakingActive);

module.exports = router;
