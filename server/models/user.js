const mongoose = require('mongoose');
const uniqid = require('uniqid');
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
  orders: [
    {
      order_id: {
        type: String,
        default: uniqid()
      },
      // status: {},
      // total: {},

      products: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Product'
        }
      ]
    }
  ],
  cart: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      },
      color: {
        type: String
      },
      size: {
        type: String
      }
    }
  ],

  shippingAddress: [
    {
      firstName: {
        type: String,
        trim: true,
        required: true
      },
      lastName: {
        type: String,
        trim: true,
        required: true
      },
      street: {
        type: String,
        trim: true,
        required: true
      },
      city: {
        type: String,
        trim: true,
        required: true
      },
      state: {
        type: String,
        trim: true,
        required: true
      },
      zipCode: {
        type: String,
        trim: true,
        required: true
      }
    }
  ]
},
  {
    toJSON: {
      virtuals: true
    }
  }
);

// UserSchema.virtual("Total").get(function () {
//   return this.cart.reduce((total, cart) => {
//     return total + cart.total
//   }, 0)
// });

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
