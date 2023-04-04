const express = require('express');
const db = require('./config/db');
const app = express()
db.connect();
const PORT  = process.env.PORT || 3000;

app.listen(3000,()=>{
    console.log(`app is listening on port ${PORT}`)
})