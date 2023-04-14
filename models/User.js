const {DataTypes} = require('sequelize')
const sequelize = require('../config/db');
const User = sequelize.define('User',{
    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lastName:{
      type:DataTypes.STRING,
      allowNull:true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image:{
        type:DataTypes.STRING,
        allowNull:true
      },
      address:{
        type:DataTypes.STRING,
        allowNull:true
      }
    
    })
module.exports = User;