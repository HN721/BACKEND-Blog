const Post = require("../Model/Post");

const PostController = {
  createPost: async (req, res) => {
    try {
      const post = req.body;
      const postCreate = await Post.create(post);
      res.status(201).json(postCreate);
    } catch (err) {
      res.json(err);
    }
  },
};
module.exports = PostController;
