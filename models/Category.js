const {DataTypes} = require('sequelize')
const sequelize = require('../config/db');
const Category = sequelize.define('Category',{
  categoryId:{
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
      bookCount:{
        type:DataTypes.INTEGER,
        defaultValue:0
        }

    
    })
module.exports = Category;