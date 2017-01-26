var mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
    text: String
});

module.exports = mongoose.model('Todo', todoSchema);