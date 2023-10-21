// models/user.js

const Sequelize = require('sequelize');
const sequelize = require('../config'); // Import koneksi database dari config.js

const User = sequelize.define('users', {
  // Definisikan atribut-atribut tabel User di sini
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    field: 'email' // Sesuaikan dengan nama kolom di tabel SQL
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'gender' // Sesuaikan dengan nama kolom di tabel SQL
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'password' // Sesuaikan dengan nama kolom di tabel SQL
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'role' // Sesuaikan dengan nama kolom di tabel SQL
  }
  // Anda dapat menambahkan atribut lainnya sesuai kebutuhan aplikasi Anda
}, {
  tableName: 'users', // Menentukan nama tabel secara eksplisit
  timestamps: false // Nonaktifkan timestamps (created_at dan updated_at)
});

// Sinkronkan model dengan basis data, jika diperlukan
// sequelize.sync();

module.exports = User;
