const Category = require('../Model/categoryModel');
const News = require('../Model/modal');

// Get all categories (only non-deleted)
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({ isDeleted: false }).sort({ createdAt: -1 });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Add category
exports.addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });

    const category = new Category({ name });
    await category.save();
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update category + update News category field
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // find old category first
    const oldCategory = await Category.findById(id);
    if (!oldCategory) return res.status(404).json({ error: 'Category not found' });

    // update category
    const updated = await Category.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    if (updated) {
      // update all news that used old category name
      await News.updateMany(
        { category: oldCategory.name },
        { $set: { category: name } }
      );
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Soft delete category
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndUpdate(id, { isDeleted: true });
    res.json({ message: 'Category soft deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
// ✅ Get categories (both active + deleted) for Admin
exports.getCategoriesForAdmin = async (req, res) => {
  try {
    // Fetch all categories, include both deleted and active
    const categories = await Category.find().sort({ createdAt: -1 });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// ✅ Restore category
exports.restoreCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const restored = await Category.findByIdAndUpdate(
      id,
      { isDeleted: false },
      { new: true }
    );
    if (!restored) return res.status(404).json({ error: 'Category not found' });
    res.json({ message: 'Category restored', category: restored });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// ✅ Get count of non-deleted categories
exports.getTotalActiveCategories = async (req, res) => {
  try {
    const total = await Category.countDocuments({ isDeleted: false });
    res.json({ totalActiveCategories: total });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};