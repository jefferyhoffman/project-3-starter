const challengesController = require("express").Router();

const db = require("../../models");

challengesController.get("/", (req, res) => {
  db.Challenges.findAll()
    .then((challenges) => res.json(challenges))
    .catch((err) => console.log(err));
});

module.exports = challengesController;
