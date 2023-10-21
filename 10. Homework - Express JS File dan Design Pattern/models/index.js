const Sequelize = require('sequelize');
const sequelize = new Sequelize('Homework10', 'postgres', 'mahesa123', {
  host: 'localhost',
  dialect: 'mysql',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
db.Movie = require('./movie')(sequelize, Sequelize);

module.exports = db;
