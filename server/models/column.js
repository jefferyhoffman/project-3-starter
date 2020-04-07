const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const columnSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 15
  },
  boardId: {
      type: Schema.Types.ObjectId,
      ref: "Board",
      required: true
  }
});

let Column = mongoose.model("Column", columnSchema);

module.exports = Column;
