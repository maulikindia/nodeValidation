let mongoose = require('mongoose');

let newSchema = new mongoose.Schema({
    name: { type: String },
    rollNo: { type: String },
    email: { type: String },
    role: { type: String, enum: ['student', 'monitor'] }
});

module.exports = mongoose.model('demo', newSchema);