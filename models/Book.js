const {DataTypes} = require('sequelize')
const sequelize = require('../config/db');
const Shop = require('./Shop');
const Category = require('./Category');
const Book = sequelize.define('Book',{
name:{
    type:DataTypes.STRING,
    allowNull:false
},
isbn:{
    type:DataTypes.STRING,
    allowNull:false,
},
publisher:{
    type:DataTypes.STRING,
    allowNull:true,
},
publicationDate:{
    type:DataTypes.DATE
},
price:{
    type:DataTypes.FLOAT,
    allowNull:false
},
genre:{
    type:DataTypes.ARRAY(DataTypes.STRING),

},
description:{
    type:DataTypes.STRING,
},
coverImage:{
    type:DataTypes.STRING,
    allowNull:true
},
availability:{

    type:DataTypes.BOOLEAN,
    defaultValue:false
},
rating:{
    type:DataTypes.FLOAT,
},
user_rating_count:{
    type:DataTypes.INTEGER
},
sale:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
}
});
Book.belongsTo(Shop,{foreignKey:"shopId"})
Shop.hasMany(Book,{foreignKey:"shopId"})

Book.belongsTo(Category,{foreignKey:"categoryId"})
Category.hasMany(Book,{foreignKey:"categoryId"})

module.exports = Book;