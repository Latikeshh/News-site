const express = require('express');
const router = express.Router();
const categoryController = require('../Controller/categoryController');

// ✅ Get non-deleted categories (public)
router.get('/category', categoryController.getCategories);

// ✅ Add category
router.post('/addcategory', categoryController.addCategory);

// ✅ Update category + update News category field
router.put('/updatecategory/:id', categoryController.updateCategory);

// ✅ Soft delete category
router.post('/softdeletecat/:id', categoryController.deleteCategory);

// ✅ Get all categories (active + deleted) for admin panel
router.get('/admin/categories', categoryController.getCategoriesForAdmin);

// ✅ Restore soft deleted category
router.post('/restorecategory/:id', categoryController.restoreCategory);

router.get('/categoriescount', categoryController.getTotalActiveCategories);

module.exports = router;
