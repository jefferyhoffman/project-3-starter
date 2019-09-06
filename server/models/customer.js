const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomersSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    tank_type: String,
    tank_size: String,
    contacted: Boolean,
    message: String,
    date_contacted: String,
    service_notes: String,
    products_used: String,
    active: Boolean
})
let Customers = mongoose.model('Customer', CustomersSchema)
module.exports =  Customers;
