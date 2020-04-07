const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const boardSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 15
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

let Board = mongoose.model("Board", boardSchema);

module.exports = Board