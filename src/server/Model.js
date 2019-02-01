const URI = process.env.MONGO_URI

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bananaSchema = new Schema({
  startDate: {
    type: String,
    required: true
  },
  numberOfDays: {
    type: Number,
    required: true
  },
  totalCost: {
    type: String,
    required: true
  }
}, {
    timestamps: true
  });

module.exports = mongoose.model('BananaOrder', bananaSchema); // <-- export model
