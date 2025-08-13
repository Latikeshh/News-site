const mongoose = require('mongoose');

const registrSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String
    },
});

module.exports = mongoose.model('registration', registrSchema);
