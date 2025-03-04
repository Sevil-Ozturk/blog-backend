require('dotenv').config();
const path = require('path');

const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
// const bodyParser=require('body-parser')

const app = express()

//MİDDLWARE
app.use(express.json({ limit: '50mb' }));
app.use(cors());

const postsRoute = require('./routes/postRoutes') 
// const usersRoute = require('./routes/userRoutes') 




app.use('/uploads',express.static(path.join(__dirname, 'uploads')));



// // JSON verileri kabul et ve boyut limitini artır (olmadı bu kod)
// app.use(bodyParser.json({ limit: '500mb' }));  // 50 MB'a kadar veri kabul edilir.
// app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));  // URL encoded veriler için de limit artırılabilir.


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
