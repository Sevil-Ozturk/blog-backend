// require('dotenv').config();

// const express=require('express');
// const expressLayouts = require('express-ejs-layouts');
// const app = express();

// const PORT = 3000 || process.env.PORT;
// app.use(express.static('public'));/// vue ile yapacağım ??????? buraya css javascript ve html dosyası koydu

// // template engine
// app.use(expressLayouts);
// app.set('layouts','./layouts/main');
// app.set('viewengine','ejs');

// app.use('/', require('./server/routes/main'));

// app.listen(PORT,()=>{
//     console.log(`uygulama ${PORT}. portta çaılışıyor...`);

// });


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Bağlantısı
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB bağlantısı başarılı"))
    .catch((err) => console.error("MongoDB bağlantı hatası:", err));

// Blog Modeli
const Blog = mongoose.model("Blog", new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
}));

// API Rotaları
// Tüm blogları listele
app.get("/blogs", async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
});

// Yeni blog ekle
app.post("/blogs", async (req, res) => {
    const blog = new Blog(req.body);
    await blog.save();
    res.json(blog);
});

// Blog sil
app.delete("/blogs/:id", async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog silindi" });
});

// Sunucuyu başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`));
