const Sequelize = require('sequelize');


const sequelize = new Sequelize('test', 'aezaz', 'aezaz', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false // set to true if you want to see SQL queries
});
const connect = ()=>{
    sequelize.authenticate()
    .then(()=>{console.log('connection established')})
    .catch((err)=>console.error('unable to connect to the db',err));
}
module.exports = {connect};