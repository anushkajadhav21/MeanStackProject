const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    firstname: String,
    lastname: String
});

const model = mongoose.model('User', userSchema);

module.exports = model;