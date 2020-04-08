// models/board.js
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
module.exports = Board;
