let mongoose = require('mongoose');

let taskSchema = new mongoose.Schema({

    taskId: { type: Number },
    desc: { type: String }

});


taskSchema.statics.findByTaskId = function myFunc(id) {
    // return this.find({ taskId: id });
    console.log('hhh')
}


module.exports = mongoose.model('task', taskSchema);
// let tsk = mongoose.model('task', taskSchema);

// module.exports = tsk;
