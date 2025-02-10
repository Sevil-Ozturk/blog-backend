require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const postsRoute = require('./routes/postRoutes') 
const usersRoute = require('./routes/userRoutes') 

const app = express()
//MİDDLWARE
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("veritabanı bağlantısı sağlandı.");
}).catch((err) => {
  console.log("veritabanı bağlantı hatası:", err);
});

//routes

app.use('/users', usersRoute); // Kullanıcı rotaları
app.use('/', postsRoute);


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port} = http://localhost:${port}`)
});
