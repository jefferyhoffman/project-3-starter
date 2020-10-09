const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: 'Email address is required'
    },
    city: {
        type: String,
        trim: true,
        required: 'A city is required',

    },
    state: {
        type: String,
        trim: true,
        required: 'A state is required',

    },
    blog: {
        type: String,
        trim: true,
        required: 'A submission is required',

    },
    image: {
        type: String,
        trim: true,
        required: 'An image URL is required',

    },
})


let Blog = mongoose.model('Blog', BlogSchema);


module.exports = Blog;