const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('movies-database', 'postgres', 'mahesa123', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
