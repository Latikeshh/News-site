const mongoose = require('mongoose');

const registrSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: "user" },
    isDeleted: { type: Boolean, default: false } // <-- must exist
});

module.exports = mongoose.model('registration', registrSchema);
