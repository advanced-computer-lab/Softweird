const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  ID: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  DateOfBirth: {
    type: Number,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true
  },
  NumberOfBags: {
    type: String,
    required: true
  },
}, { timestamps: true });
mongoose.models = {}
const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;