const boardController = require("express").Router();
const db = require("../../models");

boardController.post("/api/board", (req, res) => {
  db.Board.create(req.body)
    .then((dbBoard) => res.json(dbBoard))
    .catch((err) => res.json(err));
});

module.exports = boardController;
