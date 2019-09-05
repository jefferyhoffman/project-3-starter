const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  event_title: { type: String, required: true },
  event_details: { type: String, required: true },
  event_place: { type: String, required: true },
  category: { type: String, required: true, default: 'random' },
  event_date: { type: Date, default: Date.now },
  event_task: { type: String },
  isTaskCompleted: { type: Boolean, default: false }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
