const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertiesSchema = new Schema ({
    propertyId: {
        type: Number
    },
    address: {
        type: String,
        trim: true,
        required: "Property address is required"
    },
    date: {
        type: Date,

    },
    task: {
        type: String,
        trim: true,
        required: "Task list is required"
    },
    employeeComments: {
            type: [],
            message: " ",
            author: "email",
            propertyId: Number,
            date: Date
    },
    clientComments: {
            type: [],
            message: " ",
            author: "email",
            propertyId: Number,
            date: Date
    },
    photo: {
        type: String,
        trim: true
    }
});

const Properties = mongoose.model("Properties", PropertiesSchema);

module.exports = Properties;