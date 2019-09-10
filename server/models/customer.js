const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomersSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, default: 'NA' },
    tank_type: { type: String, required: true },
    tank_size: { type: String, default: 'NA' },
    contacted: { type: Boolean, default: false },
    message: { type: String, default: 'NA' },
    date_contacted: { type: String, default: 'NA' },
    service_notes: { type: String, default: 'NA' },
    products_used: { type: String, default: 'NA' },
    active: { type: Boolean, default: true }
})
let Customers = mongoose.model('Customer', CustomersSchema)
module.exports =  Customers;
