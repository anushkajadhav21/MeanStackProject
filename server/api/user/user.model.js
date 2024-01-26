const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    email:{ type: String, required: true},
    password: {type: String, required: true}
});

const model = mongoose.model('User', userSchema);

module.exports = model;