const challengeactionsController = require("express").Router();

const db = require("../../models");

challengeactionsController.get("/", (req, res) => {
  db.Challengeactions.findAll()
    .then((challengeactions) => res.json(challengeactions))
    .catch((err) => console.log(err));
});

module.exports = challengeactionsController;
