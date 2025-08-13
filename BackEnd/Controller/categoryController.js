const Category = require('../Model/categoryModel');

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

// Update category
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updated = await Category.findByIdAndUpdate(id, { name }, { new: true });
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
