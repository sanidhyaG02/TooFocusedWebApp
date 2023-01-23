const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    user : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    name : {
        type: String,
    },
    priority: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('Task', taskSchema);