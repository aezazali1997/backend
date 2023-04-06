const Sequelize = require('sequelize');
const sequelize = new Sequelize('library', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false // set to true if you want to see SQL queries
});
module.exports = sequelize