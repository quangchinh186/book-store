
// Import necessary modules
const express = require('express');
const router = express.Router();
const PostModel = require('../schema/post');
// Create a new post
router.post('/createPost', async (req, res) => {
  try {
    await PostModel.create(req.body);
  } catch (err) {
    res.json(err);
  }
});

// Get all posts
router.get('/getPosts', (req, res) => {
  PostModel.find({}).then(result => res.json(result)).catch(err => res.json(err));
});

// Edit a post
router.put('/editPost/:id', async (req, res) => {
  await PostModel.findByIdAndUpdate(req.params.id, req.body);
});
  
// Delete a post
router.delete('/deletePost/:id', async (req, res) => {
  await PostModel.findByIdAndDelete(req.params.id);
});

module.exports = router;


