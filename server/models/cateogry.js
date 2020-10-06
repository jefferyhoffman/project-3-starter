const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  type: {
      type: String,
      trim: true,
      required: "Type is required"
  }
 
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
