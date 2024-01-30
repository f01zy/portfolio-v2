const nodemailer = require("nodemailer")

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_USER_PASSWORD
      }
    })
  }

  async send(message) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `Сообщение на сайте folzy`,
      text: "",
      html:
        `
      <div>
        <a>${message}</p>
      </div>
      `
    })
  }
}

module.exports = new MailService()