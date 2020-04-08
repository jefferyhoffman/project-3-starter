// models/board.js
var CardSchema = new Schema({ title: String, body: String });

var ColumnSchema = new Schema({ title: String, cards: [CardSchema] });

var BoardSchema = new Schema({
  title: String,
  columns: [ColumnSchema],
});

var Board = mongoose.model("Board", BoardSchema);
module.exports = Board;
