const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const boardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;