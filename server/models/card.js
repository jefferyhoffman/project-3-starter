const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  boardId: {
    type: Schema.Types.ObjectId,
    ref: "Board",
    required: true
  },
  columnID: {
    type: Schema.Types.ObjectId,
    ref: "Column",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
