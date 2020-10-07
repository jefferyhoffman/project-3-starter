const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail"],
    trim: true
  },

  first_name: { 
    type: String, 
    //required: 'first name is required',
    trim: true
  },
  
  last_name: { 
    type: String,
    //required: 'last name is required',
    trim: true
  },
  
  
  email: {
    type: String,
    match: [/.+@.+\..+/ , "Please enter a valid e-mail"],
    trim: true
  },
  
  
  
  password: {
    type: String,
    trim: true,
    required: 'A password is required',
    validate: [
      function (input) {
        return input.length >= 4
      },
      'password should be four characters or longer'
    ],
    trim: true
  },

  userCreatedDate: {
    type: Date,
    default: () => new Date()
  }
});

UserSchema.methods.setFullName = function() {
  this.fullName = `${this.first_name} ${this.last_name}`;
};

UserSchema.methods.comparePassword = function(challenge) {
  return this.password === challenge;
}

let User = mongoose.model('User', UserSchema);

module.exports = User;
