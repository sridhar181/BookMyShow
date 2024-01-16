const mongoose = require('mongoose');
console.log("connecting to moongose");
mongoose.connect('mongodb://localhost:27017/BookMyShow');
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to the database');
  });
console.log("connected to moongose")