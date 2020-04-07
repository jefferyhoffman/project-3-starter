const db = require("../../models");
const mongoose = require("mongoose");

module.exports = function (app) {
  app.post("/api/board", (req, res) => {
    db.Board.create(req.body)
      .then((dbBoard) => {
        res.json(dbBoard);
      })
      .catch((err) => {
        res.json(err);
      });
  });


};
