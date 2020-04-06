const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  cardID: {
    type: Schema.Types.ObjectId,
    required: true
  },
  columnID: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true
  }
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
