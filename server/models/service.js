const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    services: {
        type: Array,
        trim: true,
        required: 'Name is required'
    },
    cost: {
        type: Number,
        trim: true,
        required: 'Email address is required'
    },
    date: {
        type: Date,
        trim: true,
        required: 'A date is required',
    },
    complete: {
        type: Boolean,
        default: false
    }    
})

class newService {
    constructor({ name, id, email, password, address, phone, cart, upcoming, completed }) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.password = password;
        this.address = address;
        this.phone = phone;
        this.cart = cart;
        this.upcoming = upcoming;
        this.completed = completed;
    }
}

ServiceSchema.loadClass(newService);
let Service = mongoose.model('Service', ServiceSchema);

module.exports = Service
