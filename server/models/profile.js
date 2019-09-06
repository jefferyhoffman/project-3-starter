const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  user_name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: false },
  business: { type: String, required: false },
  website: { type: String, required: false }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
