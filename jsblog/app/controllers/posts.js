// controllers/posts.js
var mongoose = require('mongoose');

var ObjectId = require('mongoose').Types.ObjectId;

var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

var postsController = {};

postsController.errorHandler = function(res) {
	console.log(err);
	res.status(500);
	res.json({ status: 'server error' });
}

postsController.getAll = function(req, res) {

	Post.find({},'_id title text read_time').exec(function(err, docs) {

		if(err) {
			errorHandler(res);
			return;
		}

		res.status(200);
		res.json({"posts" : docs});

	});

	
}

postsController.save = function(req, res) {

	Post.create({
			title: req.body.title,
			text: req.body.text
		}, 

		function(err, docs) {

			if(err) {
				errorHandler(res);
				return;
			}

			res.status(200);
			res.json({ status: 'success' })

		}
	);

}


postsController.getById = function(req, res) {

	Post.findOne({ _id : new ObjectId(req.param('idPost')) })
		.exec(function(err, doc) {

			if(err) {
				errorHandler(res);
				return;
			}


			res.status(200);
			res.json({ data: doc });

		});

}


postsController.saveComment = function(req, res) {

	Post.findOne({ _id : new ObjectId(req.param('idPost')) })
		.exec(function(err, doc) {

			doc.comments.push(new Comment({
				text : req.body.text
			}));

			doc.save(function (err) {
  				

				if(err) {
					errorHandler(res);
					return;
				}


  				res.status(200);
				res.json({ success: 'success' });
			});

		});

}

postsController.removeById = function(req, res) {

	console.log('removeById');

	Post.findOne({ _id : new ObjectId(req.param('idPost')) }).remove(function(err) {

		if(err) {
			errorHandler(res);
			return;
		}

		res.status(200);
		res.json({ success: 'success' });


	});

}

module.exports = postsController;