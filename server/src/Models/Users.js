const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  NationalID: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
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
const Users = mongoose.model('Users', usersSchema);
module.exports = Users;