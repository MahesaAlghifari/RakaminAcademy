const Sequelize = require('sequelize');
const sequelize = require('../config'); // Import koneksi database dari config.js

const Movie = sequelize.define('movies', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  genres: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.STRING,
    allowNull: false
  },
  photo: {
    type: Sequelize.STRING,
    field: 'photo' // Pastikan ini sesuai dengan nama kolom di basis data
  }
  // Anda dapat menambahkan atribut lainnya sesuai kebutuhan aplikasi Anda
}, {
  tableName: 'movies', // Menentukan nama tabel secara eksplisit
  timestamps: false // Nonaktifkan timestamps (created_at dan updated_at)
});

module.exports = Movie;
