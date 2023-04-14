const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const sequelize = require('./config/db');
const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter')
const shopRouter = require('./routes/shopRouter')
const bookRouter = require('./routes/bookRouter');
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRouter')

const app = express()
const Shop = require('./models/Shop')
const Book= require('./models/Book')
const Order = require('./models/Order')

app.use(express.json());
app.use(cors())
app.use(morgan('combined'))

const PORT  = process.env.PORT || 3000;

  sequelize.authenticate()
    .then(()=>{
    
      console.log('connection established')
      sequelize.sync({
        alter:true
      })
      
    })
    // Shop.sync({
    //   force:true
    // })
    .catch((err)=>console.error('unable to connect to the db',err));
app.use('/auth',authRouter);
app.use('/user',userRouter);
app.use('/shop',shopRouter);
app.use('/book',bookRouter);
app.use('/category', categoryRoutes);
app.use('/order',orderRoutes)

app.listen(3000,()=>{
    console.log(`app is listening on port ${PORT}`)
})