const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertiesSchema = new Schema ({
  
    address: {
        type: String,
        trim: true,
        required: "Property address is required"
    },
    propertyId:{
        type: Number,
        required:"Property ID is required"
    },
    date: Date,
    task: {
        type: String,
        trim: true,
        required: "Task list is required"
    },
    employeeComments: [{
        type: String
    }],
    clientComments: [{
        type: String
    }],
    photo: {
        type: String,
        trim: true
    }
});

const Properties = mongoose.model("Properties", PropertiesSchema);

module.exports = Properties;