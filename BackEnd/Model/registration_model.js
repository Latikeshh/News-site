const mongoose = require('mongoose');

const registrSchema = mongoose.Schema({
    email: {
        type: String,default:'laki@gmail.com'
    },
    password: {
        type: String,default:'laki123'
    },
});

module.exports = mongoose.model('registration', registrSchema);
