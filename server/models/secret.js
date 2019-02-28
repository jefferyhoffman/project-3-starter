const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SecretSchema = new Schema({
    message: {
        type: String,
        trim: true,
        default: 'The clock tolls twice at midnight on the next full moon'
    }
})

let Secret = mongoose.model('Secret', SecretSchema)

module.exports = Secret