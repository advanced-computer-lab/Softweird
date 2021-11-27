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
    type: Date,
    required: true,
  },
  PhoneNumber: {
    type: Number,
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