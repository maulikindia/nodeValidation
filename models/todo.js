let validateEmail = function (email) {
    if (email) {
        email.length > 2;
    }
    return '{VALUE} should be greater than 2'
}

function stringValue(data) {
    if (typeof (data) !== 'number') {
        return `${data} should be number`;
    }
}

let todoSchema = new mongoose.Schema({
    todoId: { type: Number, required: 'todoId is required' }, // required:'' is a alternation of the - required[true,msg] 
    taskDesc: {
        type: String, validate: [checkForEmpty, 'task desc should not be empty'],
        trim: true
    },
    email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'], //match used to matching with prefined regex 
        minlength: 15,
        maxlength: 50,
        trim: true
    }
});


function checkForEmpty() {
    return this.taskDesc > 0;
}


function checkForString() {
    return !typeof (this.taskDesc) === String;
}


module.exports = mongoose.model('todo', todoSchema);