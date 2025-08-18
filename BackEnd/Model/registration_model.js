const mongoose = require('mongoose');

const registrSchema = new mongoose.Schema({
    name:  { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: "editor" },
    isDeleted: { type: Boolean, default: false } // <-- must exist
});

module.exports = mongoose.model('registration', registrSchema);
