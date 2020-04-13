const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CardSchema = new Schema({
  title: {
    type: String,
    minlength: 1,
    maxlength: 15,
  },
  body: {
    type: String,
    minlength: 1,
    maxlength: 140,
  },
  // priority: {
  //   enum: ["low", "medium", "high"],
  // },
});

var ColumnSchema = new Schema({
  title: {
    type: String,
    minlength: 1,
    maxlength: 15,
  },
  cards: [CardSchema],
});

var BoardSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: String,
    minlength: 1,
    maxlength: 15,
  },
  columns: [ColumnSchema],
});

var Board = mongoose.model("Board", BoardSchema);
var Column = mongoose.model("Column", ColumnSchema);
var Card = mongoose.model("Card", CardSchema);

module.exports = {
  Board: Board,
  Column: Column,
  Card: Card
}