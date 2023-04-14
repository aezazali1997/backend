const {DataTypes} = require('sequelize')
const sequelize = require('../config/db');
const Shop = sequelize.define('Shop',{
  shopId:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: true,
        },
      address:{
    type:DataTypes.STRING (500)       
      },
      bookCount:{
        type:DataTypes.INTEGER,
        defaultValue:0

      }

    
    })
module.exports = Shop;