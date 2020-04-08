// models/board.js
<<<<<<< HEAD
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CardSchema = new Schema({ title: String, body: String });
=======
var CardSchema = new Schema({
  title: {
    type: String,
    minlength: 1,
    maxlength: 15,
  },
  body: String,
  priority: {
    enum: ["low", "medium", "high"],
  },
});
>>>>>>> 32c10bdcd2d1b4d04b555b637f8953948e2399b2

var ColumnSchema = new Schema({
  title: {
    type: String,
    minlength: 1,
    maxlength: 15,
  },
  cards: [CardSchema],
});

var BoardSchema = new Schema({
  title: String,
  columns: [ColumnSchema],
});

var Board = mongoose.model("Board", BoardSchema);
var Column = mongoose.model("Column", ColumnSchema);
var Card = mongoose.model("Card", CardSchema);

module.exports = Board;
module.exports = Column;
module.exports = Card;