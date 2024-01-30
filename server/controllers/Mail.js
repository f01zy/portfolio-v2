const MailService = require("../service/Mail")

class MailController {
  async send(req, res) {
    try {
      const { message } = req.body
      await MailService.send(message)

      return res.json(post)
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new MailController()