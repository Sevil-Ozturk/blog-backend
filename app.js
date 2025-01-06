const express = require('express')
const mongoose = require('mongoose');

const blogRoute = require('./routes/blogRoute') 
const userRoute = require('./routes/userRoute') 

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/queen\'s_space').then(() => {
  console.log("veritabanı bağlantısı sağlandı.");
}).catch((err) => {
  console.log("veritabanı bağlantı hatası:", err);
});

//routes
app.use('/', blogRoute);// buradan sonrasının yapılandırması yapılmadı daha.
// Yeni Blog Ekle
app.use('/blogs/new', blogRoute);
// Blog Düzenle
app.use('/blogs/edit/:id', blogRoute);
// Blog Detay
app.use('/blogs/:id', blogRoute);
// Kaydolma
app.use('/register', blogRoute);
// Giriş Yapma
app.use('/login', blogRoute);
// Profil
app.use('/profile', blogRoute);
// Yazarlar
app.use('/user', userRoute);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port} = http://localhost:${port}`)
});

//mongo db bağlantısı yapıldı.