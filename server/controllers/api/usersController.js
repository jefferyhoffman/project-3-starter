const usersController = require('express').Router();
const mongoose = require('mongoose')
const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

usersController.get('/', (req, res) => {
  db.Users.find()
    .then(users => {
      return res.json({ users })
    })
});

usersController.post('/', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  console.log("BODY===============================", req.body)

  db.Users.create({ firstName, lastName, email, password })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

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
usersController.put('/', JWTVerifier, (req, res)=>{
  console.log(req.body)

  db.Users.findByIdAndUpdate({_id:req.body.user}, {$set:{ role: req.body.role} })
    .then(users => {
      console.log(users)
      res.json(users)})
    .catch(err => console.log(err));
}
);

module.exports = usersController;
