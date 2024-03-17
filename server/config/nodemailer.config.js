const nodemailer = require('nodemailer');

module.exports = {
    transporter: nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_LOGIN, // email login
            pass: process.env.EMAIL_PASSWORD // email password
        }
    })
}