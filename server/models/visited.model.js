const mongoose = require('mongoose');

const visitedSchema = new mongoose.Schema({
  regId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('visited', visitedSchema);
