const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const User = require('../models/user')

const tripSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  trip_length: {
    type: String,
    required: true,
  },
  itinerary: {
    type: Array,
  },
  description: {
    type: String,
  },
  images: {
    type: mongoose.Schema.Types.Mixed,
  },
  user: {
    type: String
  }
});
const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;