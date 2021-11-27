const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true
  },
  FlightNumber: {
    type:   String,
    required: true
  },
  From: {
    type: String,
    required: true
  },
  To: {
    type: String,
    required: true
  },
  Airport: {
    type: String,
    required: true
  },
  NumberOfBags: {
    type: Number,
    required: true
  },
}, { timestamps: true });

mongoose.models = {}
const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;