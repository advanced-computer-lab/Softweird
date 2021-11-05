const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true
  },
  Age: {
    type: Number,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true
  },
}, { timestamps: true });
mongoose.models = {}
const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;