require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const postsRoute = require('./routes/postsRoute') 
const userRoute = require('./routes/userRoute') 

const app = express()
//MİDDLWARE
app.use(express.json());
//mongodb://127.0.0.1:27017/blog_backend
// const corsOptions = {
//   origin: 'http://localhost:3000',  // sadece bu adresden gelen isteklere izin verir
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],  // sadece bu HTTP metodlarına izin verir
//   allowedHeaders: ['Content-Type'],  // sadece bu başlıklarla gelen isteklere izin verir
// };

// app.use(cors(corsOptions));
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("veritabanı bağlantısı sağlandı.");
}).catch((err) => {
  console.log("veritabanı bağlantı hatası:", err);
});

// CORS ayarları
// app.use(cors({
//   origin: 'http://localhost:3000', // Nuxt.js uygulamanızın URL'si
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true,
// }));

//routes

// app.use('/blogs', blogRoute); // Blog rotaları
app.use('/users', userRoute); // Kullanıcı rotaları
app.use('/', postsRoute);
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port} = http://localhost:${port}`)
});

//mongo db bağlantısı yapıldı.

// app.use('/', blogRoute);// buradan sonrasının yapılandırması yapılmadı daha.
// // Yeni Blog Ekle
// app.use('/blogs/new', blogRoute);
// // Blog Düzenle
// app.use('/blogs/edit/:id', blogRoute);
// // Blog Detay
// app.use('/blogs/:id', blogRoute);
// // Kaydolma
// app.use('/register', blogRoute);
// // Giriş Yapma
// app.use('/login', blogRoute);
// // Profil
// app.use('/profile', blogRoute);
// // Yazarlar
// app.use('/user', userRoute);
