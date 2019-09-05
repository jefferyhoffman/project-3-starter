const eventsController = require('express').Router();
const eventsORM = require('./eventsORM');

const db = require('../../models');

eventsController.post('/', (req, res) => {
  // const { email, password } = req.body;
  // db.events.create({ email, password })
  //   .then(user => res.json(user))
  //   .catch(err => res.json(err));
});

eventsController.get('/', (req, res) => {
  eventsORM.findAll(req, res);
});

eventsController.get('/:id', (req, res) => {
  eventsORM.findById(req, res);
});

module.exports = eventsController;
