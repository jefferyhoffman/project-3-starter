const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  first_name: { 
    type: String, 
    required: true 
  },
  
  last_name: { 
    type: String,
    required: true
  },
  
  username: { 
    type: String,
     required:true, 
    
  },
  
  password: {
    type: Number,
    unique: false,
    required: true,
  },

  email: {
    type: String,
    match: ['/.+@.+\..+/' , "Please enter a valid e-mail"]
  },

  boolean: Boolean,

  array: Array,

  userCreated: {
    type: Date,
    default: Date.now
  },

  lastUpdate: Date,

  fullName: String

});

UserSchema.methods.setFullName = function() {
  this.fullName = `${this.first_name} ${this.last_name}`;

  return this.fullName;
};




class User {
  constructor({ id, email, password }) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  comparePassword(challenge) {
    return this.password === challenge;
  }
}

module.exports = User;
