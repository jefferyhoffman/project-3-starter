const usersController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

//uses middle to verify the user
usersController.get('/me', JWTVerifier, (req, res) => {
  res.json(req.user);
});

usersController.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.Users.findOne({ email })
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

usersController.post('/register', (req, res) => {
  const { email, password, firstName, lastName, phone, address } = req.body;
  console.log(req.body);
  // create empty arrays for user services in database
  db.Users.create({ email, password, firstName, lastName, phone, address, upcomingServices: [], completedServices: [], cart: []})
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

module.exports = usersController;
