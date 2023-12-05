const Post = require('../schema/Post');

class ForumService {
  static async createPost(req, res) {
    try {
      await Post.create(req.body);
    } catch (err) {
      res.json(err);
    }
  }

  static async getPosts(req, res) {
    try {
      const posts = await Post.find({});
      res.json(posts);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = ForumService;