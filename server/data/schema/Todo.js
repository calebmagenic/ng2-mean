var mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
    text: String,
    description: String,
    done: Boolean
});

module.exports = mongoose.model('Todo', todoSchema);