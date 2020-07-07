let mongoose = require('mongoose');

let taskSchema = new mongoose.Schema({

    taskId: { type: Number },
    desc: { type: String }

});

//it will used on the direct schema
taskSchema.statics.findByTaskId = function myFunc(cb, desc) {
    return this.where('desc', desc).exec(cb);
}

//it will used on instance
taskSchema.methods.demoFunction = function (cb) {
    return this.model('task').find({ taskId: this.taskId }, cb);
}


module.exports = mongoose.model('task', taskSchema);
