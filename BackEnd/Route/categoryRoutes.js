const express = require('express');
const router = express.Router();
const categoryController = require('../Controller/categoryController');

router.get('/category', categoryController.getCategories);
router.post('/addcategory', categoryController.addCategory);
router.put('/updatecategory/:id', categoryController.updateCategory);
router.post('/softdeletecat/:id', categoryController.deleteCategory); // soft delete

module.exports = router;
