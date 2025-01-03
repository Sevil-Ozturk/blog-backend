const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

// Kök endpoint ("/") için basit bir yanıt ekliyoruz
app.get('/', (req, res) => {
  res.send('API Çalışıyor!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Merhaba Nuxt.js!' });
});

app.listen(port, () => {
  console.log(`API http://localhost:${port} adresinde çalışıyor.`);
});
