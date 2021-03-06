// import express/mongoose
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const cors = require('cors');

const PORT = 3000;
app.use(cors());

const uri = process.env.MONGO_URI || 'mongodb://bananaBob:banana123@ds117545.mlab.com:17545/currencychallenge';


// import controller
const bananaController = require('./Controller');
const bananaRouter = express.Router();

// initialize app w/ body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// connect mongoDB
mongoose.connect(uri, { useNewUrlParser: true },
  (err) => {
    if (err) console.log(err);
    else console.log('Connected to the database!');
  },
);

app.use(express.static(path.join(__dirname, '../../build')));


// post banana budget document to database
bananaRouter.post('/', bananaController.postOrder, (req, res) => {
  res.status(200).json(res.locals.bananaOrder);
});

// get banana budgets from database
bananaRouter.get('/', bananaController.getBudgets, (req, res) => {
  res.status(200).json(res.locals.budgets);
});

app.use('/bananas', bananaRouter);

// run server w/ port 3000
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Listening on PORT ${PORT}`);
});
