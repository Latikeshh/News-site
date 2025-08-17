const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    message: { type: String, required: true },
    isDeleted: { type: Boolean, default: false } // <-- must exist
});

module.exports = mongoose.model('contact', contactSchema);
