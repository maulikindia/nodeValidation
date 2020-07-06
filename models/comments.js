let mongoose = require('mongoose');
let joi = require('joi');
// let joigoose = require('joigoose')(mongoose);

// let demoInfo = joi.object().keys(
//     {
//         name: joi.string().default("demo name").min(5),
//         email: joi.string().email().required(),
//         pass: joi.string().min(8).max(15).required()


//     });


// let joigooseSchema = joigoose.convert(demoInfo);
let commentSchema = new mongoose.Schema({
    commentBy: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, refPath: 'inModel' },
    inModel: {
        type: String,
        enum: ['user', 'admin']
    }
});

// demoSchema.methods.joiValidation = function (obj) {
//     let schema =
//     {
//         name: joi.string().default("demo name").max(10),
//         email: joi.string().email().required(),
//         password: joi.string().min(8).max(15).required()
//     };

//     return joi.validate(obj, schema);

// };

module.exports = mongoose.model('comment', commentSchema);