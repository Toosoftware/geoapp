var mongoose = require('mongoose');

var dbUri = 'mongodb://127.0.0.1:27017/blog';

mongoose.connect(dbUri);


mongoose.connection.on('connected', function () {
	console.log('Mongoose connected to ' + dbUri);
});

mongoose.connection.on('error',function (err) {
	console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
	console.log('Mongoose disconnected');
});


require('./post');
require('./comment');