const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    title: { type: String, required: true, maxlength: 200 },
   slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    author: { type: String, default: 'Anonymous' },
    category: { type: String, default: 'General', index: true },
    tags: [{ type: String, index: true }],
    publishedAt: { type: Date },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    image: { type: String, required: true }
})

module.exports = mongoose.model('news', userSchema)