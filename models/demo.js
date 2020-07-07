let mongoose = require('mongoose');

let newSchema = new mongoose.Schema({

    name: { type: String },
    rollNo: { type: String },
    email: { type: String }
});

module.exports = mongoose.model('demo', newSchema);