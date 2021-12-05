const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  FlightNumber: {
    type: Number,
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
  DepartureAirport: {
    type: String,
    required: true
  },
  ArrivalAirport: {
    type: String,
    required: true
  },
  Cabin: {
    type: String,
    required: true
  },
  AvailableSeats: {
    type: Number,
    required: true
  },
  Date: {
    type: Date,
    required: true
  },
  DepartureTime: {
    type: String,
    required: true
  },
  ArrivalTime: {
    type: String,
    required: true
  },
  TripDuration: {
    type: String,
    required: true
  },
  BaggageAllowance: {
    type: Number,
    required: true
  },
  Price: {
    type: Number,
    required: true
  }
}, { timestamps: true });

mongoose.models = {}
const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;