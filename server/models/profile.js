const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  user_name: { type: String, required: true },
  email: { type: String, required: true },
  user_url: { type: String, required: false },
  user_community: { type: String, required: false },

});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
