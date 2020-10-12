const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ForumSchema = new Schema({
    title: {
        type: String,
        required: 'title is required',
        trim: true
    },

    post: {
        type: String,
        required: 'post is required',
        trim: true
    },

    author: {
        type: String,
        trim: true,
        required: 'author is required'
    }

})


let Forum = mongoose.model('Forum', ForumSchema);

module.exports = Forum;
