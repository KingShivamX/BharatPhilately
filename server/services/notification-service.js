const nodemailer = require("nodemailer");
require('dotenv').config();

const mailsender = async (email, title, body) => {

  console.log(email, title, body);

  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  })


  let info = await transporter.sendMail({
    from: 'BharatPhilately || BharatPhilately - by Team',
    to: `${email}`,
    subject: `${title}`,
    html: `${body}`,
  })
  console.log(info);
  return info;

}

module.exports = mailsender;