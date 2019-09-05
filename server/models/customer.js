const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customers = new Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    tank_type: String,
    tank_size: String,
    contacted: true,
    date_contacted: String,
    service_notes: String,
    products_used: String,
    active: true
})

module.exports =  Customers;
