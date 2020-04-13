const usersController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');
const sendGrid = require('../../lib/emailSendgrid');


usersController.post('/', (req, res) => {
  const { email, password } = req.body;
  sendGrid("welcome", email);
  db.User.create({ email, password })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

usersController.get('/me', JWTVerifier, (req, res) => {
  res.json(req.user);
});

usersController.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.User.findOne({ where: { email } })
    .then(user => {
      if (!user || !user.comparePassword(password)) {
        return res.status(401).send("Unauthorized");
      }

      res.json({
        token: jwt.sign({ sub: user.id }, process.env.JWT_SECRET),
        user
      });
    });
});


usersController.post('/invite', (req, res) => {
  if(!req.body.email){
    return res
            .status(404)
            .send(`No email was given`)
  }
  sendGrid("invitefriend", req.body.email)
  res.send(req.body.email + ` was sent an invitation`)
})

// get searched email
// working
usersController.get('/search/:email', (req, res) => {
  db.User.findOne({ where: {
    email: req.params.email 
  }})
    .then(user => {
      if(!user){
        return res
          .status(404)
          .send(`A User with the email of ${user} could not be found.`)
      }

      return res.json(user);
    })
})



// get all of the people that the user is following and their current challenge point total
// working
usersController.get("/follows", JWTVerifier, (req, res) => {
  
  db.User.findByPk(req.user.id)
    .then((user)=> {
      if (!user) {
        return res
          .status(404)
          .send(`User with id ${req.user.id} not found.`);
      }

      return user.getFollowers();
    })
    .then(followers => {
      let updatedFollowers = followers;


      const allQueries = followers.map(follower => db.Challenge.findAll({
        where: {
          UserId: follower.dataValues.id
        },
        order: [['createdAt', 'DESC']],
        limit: 1
      }));
      
      Promise.all(allQueries)
        .then(allResults => {
          console.log(`**************allResults: `+ allResults[0]);
          const queries = allResults.map(result => db.ChallengeAction.findAll({
            where: {
              ChallengeId: result[0].id,
              accomplished: 1
            }
          }));
      
          return Promise.all(queries);
        })
        .then(challengeActions => {
          return challengeActions.map(actions => actions.map(action => action.dataValues.ActionId))
        })
        .then(actionIdArrays => {
          const actionsArray = actionIdArrays.map(individualArray => {
            const actionQueri = individualArray.map(val => db.Action.findAll({
                where: {
                  id: val
                }
              })
            )

            return Promise.all(actionQueri);
          })

          return Promise.all(actionsArray);
        })
        .then(actions => {
          
          const arrayOfTotals = actions.map(actionsForEachChallenge => actionsForEachChallenge.reduce((total, action) => total + action[0].points, 0));

          for (var i=0; i<arrayOfTotals.length; i++){
            updatedFollowers[i].dataValues.points = arrayOfTotals[i]
          }

          res.json(updatedFollowers);
        })
        .catch(err => console.log(err));
    })
    .catch(err=> console.log(err));
});



// add to the people a user is following
usersController.post("/follows", JWTVerifier, (req, res)=> {
  
  db.User.findByPk(req.user.id)
    .then(user => {
      if (!user) {
        return res
          .status(404)
          .send(`User with id ${req.user.id} not found.`);
      }
      // is not a function
      console.log(user);
      return user.addFollowers(req.body.userFollowie);
    })
    .then(user => res.json(user))
    .catch((err) => console.log(err));

})



// remove a userFollowie for a user
usersController.put("/follows/delete", JWTVerifier, (req, res) => {
  
  db.User.findByPk(req.user.id)
    .then(User => {
      if (!User) {
        return res
          .status(404)
          .send(`User with id ${req.user.id} not found.`);
      }
      
      return User.removeFollowers(req.body.userFollowie);
    })
    .then((updatedUser) => res.json(updatedUser))
    .catch((err) => console.log(err));

});

module.exports = usersController;
