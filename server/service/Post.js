const PostModel = require("../models/Post")

class PostService {
  async create(title, content, tags) {
    const post = await PostModel.create({ title, content, tags })
    return post
  }

  async get() {
    const posts = await PostModel.find()
    return posts
  }
}

module.exports = new PostService()