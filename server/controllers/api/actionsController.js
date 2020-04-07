const actionsController = require("express").Router();

const db = require("../../models");

actionsController.get("/", (req, res) => {
  db.Action.findAll()
    .then(actions => res.json(actions))
    .catch((err) => console.log(err));
});

module.exports = actionsController;
