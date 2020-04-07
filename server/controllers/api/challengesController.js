const challengesController = require("express").Router();

const db = require("../../models");
const { JWTVerifier } = require('../../lib/passport');

// searches for last five challenges
challengesController.get("/", JWTVerifier, (req, res) => {
  db.Challenge.findAll({
    limit: 5,
    order: [['createdAt', 'DESC']]
  })
    .then(challenges => res.json(challenges))
    .catch((err) => console.log(err));
});

// get current challenge
challengesController.get("/", JWTVerifier, (req, res) => {
  db.Challenge.findAll({
    limit: 1,
    order: [['createdAt', 'DESC']]
  })
    .then(challenges => res.json(challenges))
    .catch((err) => console.log(err));
});

// ASK T.A ABOUT THIS
// post challenge 
// must pass UserId and multiple action ids?
challengesController.post("/", JWTVerifier, (req, res) => {
  db.Challenge.create({ UserId })
    .then(challenges => res.json(challenges))
    .catch((err) => console.log(err));
});

// Add actions to a challenge
challengesController.put("/", JWTVerifier, (req, res) => {
  db.Challenge.update({

  })
    .then(challenges => res.json(challenges))
    .catch((err) => console.log(err));
});

// update challenge score


// delete an action from a challenge
// challengesController.get("/", JWTVerifier, (req, res) => {
//   db.Challenge.findAll()
//     .then(challenges => res.json(challenges))
//     .catch((err) => console.log(err));
// });

// delete an entire challenge
// challengesController.get("/", JWTVerifier, (req, res) => {
//   db.Challenge.findAll()
//     .then(challenges => res.json(challenges))
//     .catch((err) => console.log(err));
// });

module.exports = challengesController;
