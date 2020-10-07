const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BillSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: 'Email address is required'
  },
  company: {
      type: String,
      trim: true,
      required: 'Company is required' 
  },
  type: {
      type: String,
      trim: true,
      required: 'Type is required'
  },
  amount: {
      type: Number,
      trim: true,
      required: 'Amount is required'
  },
  date: {
      type: Date,
      trim: true,
      required: 'Due Date is required'
  },
  frequency: {
      type: Number,
      trim: true,
      required: 'Frequency is required'
  },
})


let Bill = mongoose.model('Bill', BillSchema);


module.exports = Bill;
