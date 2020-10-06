const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
      },
      description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
      },
      price: {
        type: Number,
        required: true,
        maxlength: 26,
        trim: true
      },
      category: [
        {
          type: String,
          required: true
        },
      ],
      inventory: [{
        quantity: {
        type: Number,
        required: true
        },
      
      }],
      sold: {
        type: Number,
        default: 0
      },
      photo: {
        type: String,
        required: true
    }
  );
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;