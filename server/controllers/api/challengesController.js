const challengesController = require("express").Router();

const db = require("../../models");
const { JWTVerifier } = require('../../lib/passport');



// searches for last five challenges
challengesController.get("/:UserId", JWTVerifier, (req, res) => {
  db.Challenge.findAll({
    limit: 5,
    order: [['createdAt', 'DESC']],
    where: req.user.id
  })
  // Add code to include actions ie. getActions
    .then(challenges => res.json(challenges))
    .catch((err) => console.log(err));
});



// get current challenge 
// must add JWTVerifier
challengesController.get("/", JWTVerifier, (req, res) => {
  db.Challenge.findAll({
    limit: 1,
    order: [['createdAt', 'DESC']],
    where: req.user.id
  })
    .then(challenge => {
      if (!challenge) {
        return res
          .status(404)
          .send(`Challenge with id ${req.params.id} not found.`);
      }
      // .getActions is not a function
      return  challenge;
    })
    .then(challenge => res.json(challenge))
    .catch((err) => console.log(err));
});



// post challenge 
// must pass UserId 
challengesController.post("/", JWTVerifier, (req, res) => {
  db.Challenge.create({ UserId: req.user.id })
    .then(challenges => res.json(challenges))
    .catch((err) => console.log(err));
});



// Add actions to a challenge
// Add JWTVerifier back in later
// working
challengesController.put("/:id", (req, res) => {
  console.log(req.body.actions);

  db.Challenge.findByPk(req.params.id)
    .then((challenge) => {
      if (!challenge) {
        return res
          .status(404)
          .send(`Challenge with id ${req.params.id} not found.`);
      }

      return challenge.setActions(req.body.actions);
    })
    .then((updatedChallenge) => res.json(updatedChallenge))
    .catch((err) => console.log(err));
});



// updates a challenge score when given a new total
// working
// would be better if this could be included in add actions route, with a way to add all points assosiaceted with actions
challengesController.put("/points/:id", JWTVerifier, (req, res) => {
  console.log(req.body.actions);

  db.Challenge.findByPk(req.params.id)
    .then((challenge) => {
      if (!challenge) {
        return res
          .status(404)
          .send(`Challenge with id ${req.params.id} not found.`);
      }

      return challenge.updateAttributes({totalPoints: req.body.totalPoints});
    })
    .then((updatedChallenge) => res.json(updatedChallenge))
    .catch((err) => console.log(err));
});



// delete an action from a challenge JWTVerifier
// working
challengesController.delete("/:id", JWTVerifier, (req, res) => {
  db.Challenge.findByPk(req.params.id)
    .then(challenge => {
      if (!challenge) {
        return res
          .status(404)
          .send(`Challenge with id ${req.params.id} not found.`);
      }
      
      return challenge.removeActions(req.body.actions);
    })
    .then((updatedChallenge) => res.json(updatedChallenge))
    .catch((err) => console.log(err));
});



// delete an entire challenge, add JWTVerifier, 
// working
challengesController.delete("/deletechallenge/:id", JWTVerifier, (req, res) => {
  db.Challenge.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(challenges => res.json(challenges))
    .catch((err) => console.log(err));
});



module.exports = challengesController;
