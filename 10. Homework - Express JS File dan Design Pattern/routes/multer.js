const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Folder di mana file akan disimpan
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nama file akan berisi timestamp untuk menghindari duplikasi nama file
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
