const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:{
    type: String,
    required: true,
  },
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
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
  Password: {
    type: String,
    required: true,
    unique: true
  },
  Age: {
    type: Number,
    required: true,
  },
  Nationality: {
    type: String,
    required: true
  },
  PhoneNumber: {
    type: String,
    required: true
  },
}, { timestamps: true });
mongoose.models = {}
const User = mongoose.model('User', userSchema);
module.exports = User;