const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  views: { type: Number, default: 0 },
  date: { type: Date, default: new Date() },
  tags: [{ type: String, required: true }]
})

module.exports = mongoose.model("Post", PostSchema)