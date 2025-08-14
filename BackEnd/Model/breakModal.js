const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  breaking: {
    type: String,
    required: true,
    trim: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('BreakingNews', categorySchema);
