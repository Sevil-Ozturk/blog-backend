require('dotenv').config();
const path = require('path');

const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const multer=require('multer')

const postsRoute = require('./routes/postRoutes') 
// const usersRoute = require('./routes/userRoutes') 

const app = express()
//MİDDLWARE
app.use(express.json());
app.use(cors());
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("veritabanı bağlantısı sağlandı.");
}).catch((err) => {
  console.log("veritabanı bağlantı hatası:", err);
});

//routes

// app.use('/users', usersRoute); // Kullanıcı rotaları
app.use('/', postsRoute);


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port} = http://localhost:${port}`)
});
