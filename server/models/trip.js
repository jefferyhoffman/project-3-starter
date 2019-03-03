const mongoose = require('mongoose');
let Schema = mongoose.Schema;

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
  // images: {
  //   type: mongoose.Schema.Types.Mixed,
  // }
});
const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;