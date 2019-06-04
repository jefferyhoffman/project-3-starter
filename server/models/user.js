const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    // required: 'Name is required',
    default: 'John'
  },
  lastName: {
    type: String,
    trim: true,
    // required: 'Name is required',
    default: 'Doe'
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
    required: 'Address is required',
    default: 'None Provided'
  },
  phone: {
    type: String,
    trim: true,
    required: 'Phone number is required',
    default: ""
  },
  cart: {
    type: Array,
  },
  upcoming: {
    type: Array,
  },
  completed: {
    type: Array
  }
})

class newUser {
  constructor({ id, firstName, lastName, email, password, address, phone, cart, upcoming, completed }) {
    this.firstname = firstName;
    this.lastName = lastName;
    this.id = id;
    this.email = email;
    this.password = password;
    this.address = address;
    this.phone = phone;
    // this.cart = cart;
    // this.upcoming = upcoming;
    // this.completed = completed;
  }

  comparePassword(challenge) {
    return this.password === challenge;
  }
}

UserSchema.loadClass(newUser);
let User = mongoose.model('User', UserSchema);


module.exports = User;