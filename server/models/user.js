const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { 
    type: String, 
    // required: 'first name is required',
    trim: true
  },
  
  last_name: { 
    type: String,
    // required: 'last name is required',
    trim: true
  },
  
  password: {
    type: String,
    unique: false,
    required: 'password is required',
    validate: [
      function (input) {
        return input.length >= 4
      },
      'password should be four characters or longer'
    ],
    trim: true
  },

  email: {
    type: String,
    match: ['/.+@.+\..+/' , "Please enter a valid e-mail"],
    trim: true
  },

  userCreatedDate: {
    type: Date,
    default: () => new Date()
  },

  forumPost: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Forum'
  }
  ]

});

UserSchema.methods.setFullName = function() {
  this.fullName = `${this.first_name} ${this.last_name}`;

  return this.fullName;
};




class newUser {
  constructor({ id, first_name, last_name, password, email, userCreatedDate }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.password = password;
    this.email = email;
    this.userCreatedDate = userCreatedDate
  }

  comparePassword(challenge) {
    return this.password === challenge;
  }
}

UserSchema.loadClass(newUser);
let User = mongoose.model('User', UserSchema);

module.exports = User;
