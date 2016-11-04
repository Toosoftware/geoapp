// post.js

'use strict';

var mongoose = require('mongoose');
var Comment = require('./comment');

var PostSchema = new mongoose.Schema({

	title : { 
		type: String, 
		required: true
	},
	
	text : { 
		type: String, 
		required: true

	},

	comments : [Comment],
	
	created_at : { 
		type: Date, 
		default: Date.now 
	},


}, {
  	toObject: {
  		virtuals: true
  	},
  	
  	toJSON: {
  		virtuals: true 
  	}

});


PostSchema.virtual('read_time').get(function () {

  // thanks to medium.com :)
  let minutes = Math.round(this.text.split(' ').length / 275);
  
  return minutes < 1 ? 'Less than 1 minute' : `${minutes} minutes`;

});


mongoose.model('Post', PostSchema, 'posts');