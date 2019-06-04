const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DrinkSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    kind: { type: String, required: true },
    image: { type: String, default: "http://placehold.it/200x200" },
    instructions: { type: String, required: true },
    ingredient1: { type: String, required: true },
    ingredient2: { type: String },
    ingredient3: { type: String },
    ingredient4: { type: String },
    ingredient5: { type: String },
    glass: { type: String },
  });

const Drink = mongoose.model("Drink", DrinkSchema);

module.exports = Drink;
