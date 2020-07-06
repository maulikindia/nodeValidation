let mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    userName: { type: String },
    userEmail: { type: String },
});

module.exports = mongoose.model('user', userSchema);