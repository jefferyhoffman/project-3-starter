const eventsController = require('express').Router();
const eventsORM = require('./eventsORM');
const db = require('../../models');

/// Routes /api/events  ///   Get Events - FindAll & Find One
eventsController.get('/', (req, res) => {
  eventsORM.findAll(req, res);
});

eventsController.get('/:id', (req, res) => {
  eventsORM.findById(req, res);
});

/// Route /api/events/post  ///   Post a new event
eventsController.post('/post', (req, res) => {
  // const { email, password } = req.body;
  // db.events.create({ email, password })
  //   .then(user => res.json(user))
  //   .catch(err => res.json(err));
});

module.exports = eventsController;
