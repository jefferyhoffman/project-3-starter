const profilesController = require('express').Router();
const profilesORM = require('./profilesORM');
const db = require('../../models');

/// Routes /api/profiles  ///   Get profiles - FindAll & Find One
profilesController.get('/', (req, res) => {
  profilesORM.findAll(req, res);
});

profilesController.get('/:id', (req, res) => {
  profilesORM.findById(req, res);
});

/// Route /api/profiles/post  ///   Create a new profile
profilesController.post('/post', (req, res) => {
  // const { email, password } = req.body;
  // db.profiles.create({ email, password })
  //   .then(user => res.json(user))
  //   .catch(err => res.json(err));
});

module.exports = profilesController;
