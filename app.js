const express = require('express')
const mongoose = require('mongoose');

const pageRoute = require('./routes/pageRoute') 

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/queen\'s_space').then(() => {
  console.log("veritabanı bağlantısı sağlandı.");
}).catch((err) => {
  console.log("veritabanı bağlantı hatası:", err);
});

//routes
app.use('/', pageRoute);// buradan sonrasının yapılandırması yapılmadı daha.
// Blog Detay
app.use('/blogs/:id', pageRoute);
// Kaydolma
app.use('/register', pageRoute);
// Giriş Yapma
app.use('/login', pageRoute);
// Profil
app.use('/profile', pageRoute);
// Yeni Blog Ekle
app.use('/blogs/new', pageRoute);
// Blog Düzenle
app.use('/blogs/edit/:id', pageRoute);
// Yazarlar
app.use('/authost', pageRoute);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port} = http://localhost:${port}`)
});

//mongo db bağlantısı yapıldı.