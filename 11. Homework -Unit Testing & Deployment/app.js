const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const todoRoutes = require('./routes/todo');

const app = express();

// Menggunakan body parser middleware untuk membaca data dari body request
app.use(bodyParser.json());

// Menghubungkan ke database PostgreSQL menggunakan Sequelize
const sequelize = new Sequelize('Homework11', 'postgres', 'mahesa123', {
  host: 'localhost',
  dialect: 'postgres'
});

// Mengimpor model Todo dari Sequelize
const Todo = require('./models/todo')(sequelize, Sequelize);

// Menggunakan rute-rute Todo yang didefinisikan di routes/todo.js
const todoRoutesInstance = todoRoutes(Todo);
app.use('/api', todoRoutesInstance);

// Sinkronisasi model dengan basis data (membuat tabel jika belum ada)
sequelize.sync().then(() => {
  console.log('Database and tables created!');
}).catch(err => {
  console.error('Error syncing database:', err);
});

// Menjalankan server Express di port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
