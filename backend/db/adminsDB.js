const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  password:{
    type: String,
    required: true,
    trim: true
  },
  chartjsdata: {
    type: [mongoose.Schema.Types.Mixed], // Using Mixed type to allow various data types in the array
    default: []
  },
  application: {
    type: [mongoose.Schema.Types.Mixed], // An array of strings
    default: []
  }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
