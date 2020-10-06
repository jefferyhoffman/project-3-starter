const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
      },
      description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000,
      },
      price: {
        type: Number,
        required: true,
        maxlength: 26,
        trim: true,
      },
      category: [
        {
          type: String,
          ref: "Category",
          required: true,
        },
      ],
      quantity: {
        type: Number,
      },
      sold: {
        type: Number,
        default: 0,
      },
      photo: String,
    }
  );
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;