const express = require('express')
const router = express.Router();
var nodemailer = require('nodemailer');


router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS
      }
    });
  
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Sevil Öztürk sitenizden ${name} kişisinden mesajınız var!!! : `,
      text: `Ad: ${name}\nEmail: ${email}\nMesaj:\n${message}`
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Mesaj başarıyla gönderildi!' });

    } catch (error) {
      console.error("Mail gönderme hatası:", error);
      res.status(500).json({ error: 'Mesaj gönderilemedi. Lütfen tekrar deneyin.' });
    }
  });
  
  module.exports = router;