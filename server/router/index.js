const Router = require("express").Router
const router = new Router()
const PostController = require("../controllers/Post")

router.get("/post", PostController.get)
router.post("/post", PostController.create)

module.exports = router