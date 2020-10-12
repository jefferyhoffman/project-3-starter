const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {
        type: String,
        required: 'comment is required',
        trim: true
    }


})

class newComment {
    constructor({ id, comment}) {
        this.id = id;
        this.comment = comment;
    }

}



commentSchema.loadClass(newComment);
let Comment = mongoose.model('comment', UserSchema);

module.exports = Comment;
