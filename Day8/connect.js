const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const postroute = require('./postroute')
const post = require('./postDB');
app.use(express.json());

//Connect to Mongoose
mongoose.connect(process.env.MONGO_URI).then(()=>{
   console.log("you connected to database successfully");
}).catch((err)=>{
    console.log("Error",err)
});

//route to post
app.use ("/posts",postroute);
const port = process.env.PORT||8000;

// Listen to the server
app.listen(port,'127.0.0.1',()=>{
    console.log("server running right now ");
});