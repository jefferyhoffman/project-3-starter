const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
   name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    cost: {
        type: Number,
        trim: true,
        required: 'Cost is required'
    },
    date: {
        type: Date,
        trim: true,
        required: 'A date is required',
    },
    complete: {
        type: Boolean,
        default: false
    },
    id: {
        type: String,
        trim: true,
        required: 'Id is required'
    }    
})

let Service = mongoose.model('Service', ServiceSchema);

module.exports = Service
