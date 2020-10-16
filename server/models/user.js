const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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

  name: {
    type: String,
    trim: true
  },

  keepMePosted: {
    type: Boolean,

  },

  whatIamLookingFor: [
    {
      category: {
        type: String
      }
    }
  ],

  isVendor: {
    type: Boolean,
    default: false
  },

  vendorLocations: [
    {
      name: {
        type: String
      },

      streetAddress: {
        type: String
      },
      city: {
        type: String
      },
      state: {
        type: String
      },
      zipCode: {
        type: Number
      },
      daysAtLocation: {
        type: String
      },
      hoursAtLocation: {
        type: String
      }
    }
  ],

  allVendorProducts: [
    {
      name: {
        type: String
      },
      isFeatured: {
        type: Boolean,
        default: false
      }
    }
  ],

  reportedBugs: [
    {
      comment: {
        type: String,
        trim: true
      }
    }
  ]

})

UserSchema.methods.comparePassword = function (challenge) {
  return this.password === challenge;
}

let User = mongoose.model('User', UserSchema);


module.exports = User;
