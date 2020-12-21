const express = require('express');
const router = express.Router();

const postsController = require('../controller/posts');

/* GET all posts */
router.get('/', postsController.getAllPosts);

/* GET posts by ID */
router.get('/:userId', postsController.getPostsById);

/* GET posts by ID and favorites */
router.get('/:userId/fave', postsController.getPostsByFavorites);

/* DELETE individual posts by it's unique ID*/
router.delete('/:id', postsController.deletePostsById);

module.exports = router;