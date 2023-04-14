const Sequelize = require('sequelize');
require('dotenv').config();
const database = process.env.DATABASE;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const host = process.env.HOST;
const sequelize = new Sequelize(database, dbUser,dbPassword , {
  host: host,
  dialect: 'postgres',
  logging: false // set to true if you want to see SQL queries
});
module.exports = sequelize