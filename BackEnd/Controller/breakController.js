const BreakingNews = require('../Model/breakModal');

// Create Breaking News
exports.createBreaking = async (req, res) => {
  try {
    const { breaking } = req.body;
    if (!breaking) {
      return res.status(400).json({ message: 'Breaking news text is required' });
    }
    const newBreaking = new BreakingNews({ breaking });
    await newBreaking.save();
    res.status(201).json({
      message: 'Breaking news created successfully',
      data: newBreaking
    });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Get only active (Frontend)
exports.getActiveBreaking = async (req, res) => {
  try {
    const activeNews = await BreakingNews.find({ isDeleted: false }).sort({ createdAt: -1 });
    res.status(200).json({ data: activeNews });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Get all including deleted (Admin)
exports.getAllBreaking = async (req, res) => {
  try {
    const breakingList = await BreakingNews.find().sort({ createdAt: -1 });
    res.status(200).json({ data: breakingList });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Update Breaking News text
exports.breakingUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { breaking } = req.body;

    if (!breaking) {
      return res.status(400).json({ message: 'Breaking news text is required' });
    }

    const updatedBreaking = await BreakingNews.findByIdAndUpdate(
      id,
      { breaking },
      { new: true }
    );

    if (!updatedBreaking) {
      return res.status(404).json({ message: 'Breaking news not found' });
    }

    res.status(200).json({ message: 'Breaking news updated', data: updatedBreaking });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Soft Delete
exports.softDeleteBreaking = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBreaking = await BreakingNews.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );

    if (!updatedBreaking) {
      return res.status(404).json({ message: 'Breaking news not found' });
    }

    res.status(200).json({ message: 'Breaking news soft deleted', data: updatedBreaking });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Recover
exports.recoverBreaking = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBreaking = await BreakingNews.findByIdAndUpdate(
      id,
      { isDeleted: false },
      { new: true }
    );

    if (!updatedBreaking) {
      return res.status(404).json({ message: 'Breaking news not found' });
    }
    res.status(200).json({ message: 'Breaking news recovered', data: updatedBreaking });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};
//total breaking news without deleted 
exports.getTotalBreakingActive = async (req, res) => {
  try {
    const total = await BreakingNews.countDocuments({ isDeleted: false });
    res.status(200).json({ total });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};