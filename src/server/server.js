// import express/mongoose
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
// const PORT = 3333;
const PORT = 3000;

// import controller
const bananaController = require('./Controller');
const bananaRouter = express.Router();

// initialize app w/ body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// connect mongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true },
  (err) => {
    if (err) console.log(err);
    else console.log('Connected to the database!');
  },
);

app.use(express.static(path.join(__dirname, '../../build')));

app.use('/bananas', bananaRouter);

// app.use(express.static("dist"));


// run server w/ port 8080
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Listening on PORT ${PORT}`);
});
