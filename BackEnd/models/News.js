const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  // _id generated automatically by MongoDB
  title: { type: String, required: true, maxlength: 200 },
  slug: { type: String, unique: true, index: true },
  summary: { type: String, maxlength: 500 },
  content: { type: String, required: true },
  author: { type: String, default: 'Anonymous' },
  category: { type: String, default: 'General', index: true },
  tags: [{ type: String, index: true }],
  publishedAt: { type: Date },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

newsSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  if (!this.slug && this.title) {
    this.slug = this.title.toLowerCase().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, '');
  }
  next();
});

newsSchema.pre('findOneAndUpdate', function (next) {
  this._update.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('News', newsSchema);
