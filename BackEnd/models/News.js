const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },            // News headline
    content: { type: String, required: true },          // Full news content
    author: { type: String, default: 'Anonymous' },     // News author
    category: { type: String, default: 'General' },     // News category (e.g., sports, politics)
    thumbnail: { type: String, default: '' },           // URL to image
    isDeleted: { type: Boolean, default: false },       // Soft delete
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Middleware to update timestamp
newsSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

newsSchema.pre('findOneAndUpdate', function (next) {
    this._update.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('News', newsSchema);
