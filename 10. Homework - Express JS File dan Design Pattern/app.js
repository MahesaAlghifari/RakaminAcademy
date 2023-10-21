const express = require('express');
const multer = require('multer');
const app = express();
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// Konfigurasi Multer untuk menyimpan file di folder 'uploads'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Folder di mana file akan disimpan
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Nama file akan tetap sama dengan nama aslinya
  }
});

const upload = multer({ storage: storage });

// Endpoint untuk mengunggah foto
app.post('/upload', upload.single('photo'), (req, res) => {
  // Logika untuk menangani pengunggahan foto
  // req.file berisi informasi tentang file yang diunggah
  // Lakukan sesuatu dengan file yang diunggah, misalnya menyimpan informasi file ke basis data

  // Respond dengan respons sukses atau kegagalan, tergantung pada hasil operasi di atas
  res.json({ message: 'File uploaded successfully' });
});

// Routes
app.use('/movies', movieRoutes);
app.use('/users', userRoutes);

// Serve static files from the 'views' folder
app.use(express.static('views'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
