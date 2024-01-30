const Router = require("express").Router
const router = new Router()
const PostController = require("../controllers/Post")
const MailController = require("../controllers/Mail")

router.get("/post", PostController.get)
router.post("/post", PostController.create)
router.post("/send", MailController.send)

module.exports = router