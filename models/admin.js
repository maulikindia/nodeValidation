let mongoose = require('mongoose');
let adminSchema = new mongoose.Schema({

    name: { type: String },
    email:{type:String}
});

module.exports = mongoose.model('admin', adminSchema);