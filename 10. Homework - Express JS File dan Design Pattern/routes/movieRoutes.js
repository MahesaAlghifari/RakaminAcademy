const express = require('express');
const router = express.Router();
const multer = require('multer');

const movieController = require('../controllers/movieController');



// Konfigurasi multer untuk menyimpan file di folder 'uploads'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Rute untuk mengunggah file ke data movies
// router.post('/upload', upload.single('photo'), movieController.uploadPhoto);

// Dalam movieRoutes.js
// ...
router.post('/', upload.single('photo'), movieController.createMovie);
router.put('/:id', upload.single('photo'), movieController.updateMovie);

// Rute untuk movies
router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', movieController.createMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
