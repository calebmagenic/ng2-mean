var mongoose = require('mongoose');

var connect = function connect () {
    mongoose.connect('mongodb://localhost:27017'); // Connects to your MongoDB.  Make sure mongod is running!
    mongoose.connection.on('error', function() {
        console.log(arguments);
        console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
        process.exit(1);
    });
}

module.exports = {
    connect: connect
}