
// Import necessary modules
const express = require('express');
const router = express.Router();
const ForumService = require('../services/ForumService');

// Create a new post
router.post('/create_post', ForumService.createPost);

// Get all posts
router.get('/get_posts', ForumService.getPosts);

module.exports = router;


