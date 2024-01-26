const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    firstname: String,
    lastname: String
});

const model = mongoose.model('Employee', employeeSchema);

module.exports = model;