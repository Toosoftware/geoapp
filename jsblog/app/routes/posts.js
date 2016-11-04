var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts');

router.get('/posts', postsController.getAll);
router.post('/posts', postsController.save);

router.get('/posts/:idPost', postsController.getById);
router.delete('/posts/:idPost', postsController.removeById);

router.post('/posts/:idPost/comments', postsController.saveComment);

module.exports = router;