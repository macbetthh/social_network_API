//server - importing required modules
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

//middle earth..er... middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongoDB connection this will break at least 57 times i'm sure
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB', {
    useNewUrlParser: true, // Use the new URL parser because new things are fun
    useUnifiedTopology: true, // Use the new server discovery and monitoring engine because also new :)
  });
  
  mongoose.set('debug', true); // Enable debug mode to log MongoDB queries in the console because Beth doesn't know how things work on a daily basis


  //route for testing server is working/running
  app.get('/', (req, res) => {
    res.send('API is running');
  });
  

  // route integration
  app.use('/api', require('./routes'));


  //coders starrrttt youuurrr ennggiiineesss (start the server)
  app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`)); 
