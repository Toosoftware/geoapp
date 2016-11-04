// comment.js

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema({

	text : {
		type : String,
		required: true
	},

	created_at : {
		type : Date, 
		default: Date.now
	}

});

mongoose.model('Comment', CommentSchema);

module.exports = CommentSchema;