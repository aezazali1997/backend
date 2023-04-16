const Sequelize = require('sequelize');
require('dotenv').config();
const database = process.env.DATABASE || 'library';
const dbUser = process.env.DB_USER || 'postgres';
const dbPassword = process.env.DB_PASSWORD || 'admin' ;
const host = process.env.DB_HOST || 'localhost';
const sequelize = new Sequelize(database, dbUser,dbPassword , {
  host: host,
  dialect: 'postgres',
  logging: false // set to true if you want to see SQL queries
});
module.exports = sequelize