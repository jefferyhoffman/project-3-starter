const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  email: {
    type: String,
    trim: true,
    required: 'Email address is required'
  },
  password: {
    type: String,
    trim: true,
    required: 'A password is required',
    validate: [
      function (input) {
        return input.length >= 4
      },
      'Password should be four characters or longer'
    ]
  },
  address: {
    type: String,
    trim: true,
    required: 'Address is required'
  },
  phone: {
    type: Number,
    trim: true,
    required: 'Phone number is required',
    validate: [
      function (input) {
        return input.length === 10
      },
      'Phone number should be 10 numbers long'
    ]
  },
  cart: {
    type: [],
  },
  upcoming: {
    type: [],
  },
  completed: {
    type: []
  }
})

class newUser {
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

  comparePassword(challenge) {
    return this.password === challenge;
  }
}

UserSchema.loadClass(newUser);
let User = mongoose.model('User', UserSchema);


module.exports = User;
