require('dotenv').config();
const path = require('path');

const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()

//MİDDLWARE
app.use(express.json({ limit: '50mb' }));
app.use(cors({
  origin: '*',
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));

const postsRoute = require('./routes/postRoutes') 
const contactRoute = require('./routes/contactRoutes') 
// const usersRoute = require('./routes/userRoutes') 




app.use('/uploads',express.static(path.join(__dirname, 'uploads')));



mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("veritabanı bağlantısı sağlandı.");
}).catch((err) => {
  console.log("veritabanı bağlantı hatası:", err);
});

//routes

// app.use('/users', usersRoute); // Kullanıcı rotaları
app.use('/', postsRoute);
app.use('/contact', contactRoute);


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port} = http://localhost:${port}`)
});
