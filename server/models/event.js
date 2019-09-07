const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  event_title: { type: String, required: false },
  event_details: { type: String, required: false },
  community: { type: String, required: false },
  category: { type: String, default: 'random' },
  event_place: { type: String },
  event_url: { type: String },
  html_url: { type: String },
  event_date: { type: Date, default: Date.now },
  event_time: { type: String, default: Date.now },
  event_task: { type: String },
  isTaskCompleted: { type: Boolean, default: false }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
