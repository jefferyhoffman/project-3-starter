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

/// Route /api/events  ///   Post a new event
eventsController.post('/', (req, res) => {
  eventsORM.create(req, res);
});

/// Route /api/events/:id  ///   Patch update of task and isTaskCompleted boolean
eventsController.patch('/:_id', (req, res) => {
  eventsORM.update(req, res);
});
module.exports = eventsController;
