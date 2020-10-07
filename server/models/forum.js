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
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

})

class newForum {
    constructor({ id, title, post, author }) {
        this.id = id;
        this.title = title;
        this.post = post;
        this.author = author;
    }

}



ForumSchema.loadClass(newForum);
let User = mongoose.model('Forum', UserSchema);

module.exports = User;
