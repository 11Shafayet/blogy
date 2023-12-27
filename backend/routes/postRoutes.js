const express = require('express');
const router = express.Router();
const {
  createPost,
  getUserPosts,
  deleteUserPost,
  updateUserPost,
} = require('../controllers/postControllers');

module.exports = function (postCollection) {
  router.post('/', createPost(postCollection));
  router.get('/:id', getUserPosts(postCollection));
  router.delete('/:postId', deleteUserPost(postCollection));
  router.patch('/:postId', updateUserPost(postCollection));

  return router;
};
