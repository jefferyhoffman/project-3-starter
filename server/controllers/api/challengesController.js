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
// working
challengesController.get("/", JWTVerifier, (req, res) => {
  db.Challenge.findAll({
    limit: 1,
    order: [['createdAt', 'DESC']],
    where: req.user.id
  })
    .then(challenges => {
      if (!challenges.length) {
        return res
          .status(404)
          .send(`Challenge with id ${req.params.id} not found.`);
      }
      // .getActions is not a function
      return challenges[0].getActions();
    })
    .then(actions => res.json(actions))
    .catch((err) => console.log(err));
});



// get current score of challenge based on actions accomplished
challengesController.get("/challengeaction/:id", (req, res) => {

  db.ChallengeAction.findAll({
    where: {
      ChallengeId: req.params.id,
      accomplished: 1
    }
  })
  .then((data) => {
    return (data.map(val => {
      return val.dataValues.ActionId
    }));
  })
  .then((actionIdArray) => {
    db.Action.findAll({
      where: {
        id: actionIdArray
      }
    })
    .then((actions) => {
      if (!actions) {
        return res
          .status(404)
          .send(`action could not found.`);
      }

      let scoredPoints = actions.reduce((total, action) => total + action.points, 0)

      res.json(scoredPoints);
    })
    .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
})


// post challenge 
// working
challengesController.post("/", JWTVerifier, (req, res) => {
  db.Challenge.create({ UserId: req.user.id })
    .then(challenges => res.json(challenges))
    .catch((err) => console.log(err));
});



// update through table "accomplished"
// actually updates challengeaction
// Working
challengesController.put("/challengeaction", JWTVerifier, (req, res)=>{
  const { ChallengeId, ActionId } = req.body
  
  db.ChallengeAction.findAll({
    where: {
      ChallengeId: ChallengeId,
      ActionId: ActionId,
    },
  })
    .then((data) => {
      if (!data.length) {
        return res
          .status(404)
          .send(`ChallengeAction with ChallengeId ${ChallengeId} and ActionId ${ActionId} not found.`);
      }

      if(data[0].dataValues.accomplished === false){
        return data[0].updateAttributes({
          accomplished: 1
        })
      }else {
        return data[0].updateAttributes({
          accomplished: 0
        })
      }
    })
    .then((val) => res.json(val))
    .catch((err) => console.log(err));
}) 



// Add actions to a challenge
// Add JWTVerifier back in later
// working
challengesController.put("/:id", JWTVerifier, (req, res) => {
  let currentChallenge;

  db.Challenge.findByPk(req.params.id)
    .then((challenge) => {
      currentChallenge = challenge;

      if (!currentChallenge) {
        return res
          .status(404)
          .send(`Challenge with id ${req.params.id} not found.`);
      }
      console.log(currentChallenge);
      return currentChallenge.setActions(req.body.actions);
    })
    .then(() => currentChallenge.getActions())
    .then(actions => currentChallenge.updateAttributes({
      totalPoints: actions.reduce((total, action) => total + action.points, 0) }))
    .then((updatedChallenge) => res.json(updatedChallenge))
    .catch((err) => console.log(err));
});


// NOT NEEDED
// updates a challenge score when given a new total
// workin
// challengesController.put("/points/:id", JWTVerifier, (req, res) => {
//   console.log(req.body.actions);

//   db.Challenge.findByPk(req.params.id)
//     .then((challenge) => {
//       if (!challenge) {
//         return res
//           .status(404)
//           .send(`Challenge with id ${req.params.id} not found.`);
//       }

//       return challenge.updateAttributes({totalPoints: req.body.totalPoints});
//     })
//     .then((updatedChallenge) => res.json(updatedChallenge))
//     .catch((err) => console.log(err));
// });



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
