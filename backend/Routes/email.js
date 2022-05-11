const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'emailID',
        pass: 'Password',
    },
    secure: true,
});

router.post('/send', (req, res) => {
    try {
        const { email } = req.body;
        const mailData = {
            from: 'emailID',
            to: email,
            subject: 'zomato Mail',
            text: "This is zomato app link 'www.zomato.app.com",
            html: `<b>Success!</b><br> This is our Zomato App link <strong>www.zomato-App.com</strong><br/><br/>`,
        };

        transporter.sendMail(mailData, (error, info) => {
            if (error) {
                return res.status(404).send({ message: "Mail failed", status: false });
            } else {
                res.status(200).send({ message: "Mail send", message_id: info.messageId, status: true });
            }
        });
    } catch (error) {
        res.status(404).send({ message: "internal server Error", status: false })
    }
});

module.exports = router;