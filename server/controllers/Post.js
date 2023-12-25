const PostService = require("../service/Post")

class PostController {
  async create(req, res) {
    try {
      const { title, content, tags } = req.body
      const post = await PostService.create(title, content, tags)

      return res.json(post)
    } catch (error) {
      console.log(error);
    }
  }

  async get(req, res) {
    try {
      const posts = await PostService.get()

      return res.json(posts)
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PostController()