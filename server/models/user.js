const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
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
  admin: {
    type: String,
    trim: true,
    required: "",
    validate: []
  },
  employee: {
    type: String,
    trim: true,
    required: "",
    validate: []
  },
  client: {
    type: String,
    trim: true,
    required: "",
    validate: []
  },
  userid: {
    type: Number,
  },
  properties: {
    type: Array
  }
})

class newUser {
  constructor({ id, email, password }) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  comparePassword(challenge) {
    return this.password === challenge;
  }
}

UserSchema.loadClass(newUser);
let User = mongoose.model('User', UserSchema);


module.exports = User;
