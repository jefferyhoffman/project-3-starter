const columnController = require("express").Router();
const db = require("../../models");

columnController.post("/", (req, res) => {
  db.Board.create(req.body)
    .then((dbBoard) => res.json(dbBoard))
    .catch((err) => res.json(err));
});

module.exports = boardController;