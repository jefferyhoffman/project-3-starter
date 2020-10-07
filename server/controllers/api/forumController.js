const forumController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

forumController.post('/', (req, res) => {
  db.Forum.create(req.body)
    .then(post => res.json(post))
    .catch(err => res.json(err));
});

forumController.get('/all', JWTVerifier, (req, res) => {
  db.Forum.find({}).limit(20)
    .then(posts => {
        res.json(posts);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    })
});


module.exports = forumController;