const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Order = sequelize.define('Order',{
    orderDetails:{
        type:DataTypes.ARRAY(DataTypes.JSONB),
        allowNull:true
    },
    total:{
        type:DataTypes.FLOAT,
        allowNull:true
    },
    email:{
        type:DataTypes.STRING
    },
    number:{
        type:DataTypes.INTEGER
    },
    address:{
        type:DataTypes.STRING(500)
    }

})
module.exports=Order;