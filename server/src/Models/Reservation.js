const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  FlightNumber: {
    type:  String,
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
  PassportNumber: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  DepartureAirport: {
    type: String,
    required: true
  },
  ArrivalAirport: {
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