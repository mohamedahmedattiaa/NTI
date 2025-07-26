const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config({ path: './config.env' });
const app = express();
app.use(express.json());
const {errorhandler} = require('./middlewares/error-middleware')
const userRoutes = require('./routes/auth.routes');
const articleRoutes = require('./routes/article.route');
app.use(morgan('dev'));
app.use('/users', userRoutes);
app.use('/articles', articleRoutes);
app.use(errorhandler);

const startServer = async () =>{
   try{
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Datebase is working");
      const port = process.env.PORT || 8000;
      app.listen(port,'127.0.0.1',()=>{
        console.log("server is here");
      });
   }catch(err){
      console.error('Failed to connect to MongoDB or start server:', err);
     process.exit(1); 
   }
};


mongoose.connection.on('disconnected',()=>{
  console.warn("Server is disconnected");
});

mongoose.connection.on('error',err=>{
  console.error("Error happen in the Database",err);
});
startServer();