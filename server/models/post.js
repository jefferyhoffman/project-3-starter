const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  category: { type: String, required: true, default: 'random' },
  post_title: { type: String, required: true },
  post_details: { type: String, required: true },
  post_author_name: { type: String, required: true },
  post_comment: { type: String, required: false },
  comment_author_name: { type: String, required: false },
  urgent: { type: Boolean, default: false },
  help_needed: { type: Boolean, default: false },
  offering: { type: Boolean, default: false },
  cost_per_hour: { type: Number, default: false },
  cost_per_service: { type: Number, default: false },
  trade: { type: Boolean, default: false }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
