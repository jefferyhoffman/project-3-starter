const postsController = require('express').Router();
const postsORM = require('./postsORM');
const db = require('../../models');

/// Routes /api/posts  ///   Get posts - FindAll & Find One
postsController.get('/', (req, res) => {
  postsORM.findAll(req, res);
});

postsController.get('/:id', (req, res) => {
  postsORM.findById(req, res);
});

/// Route /api/posts  ///   Post a new event
postsController.post('/', (req, res) => {
  postsORM.create(req, res);
});

/// Route /api/posts/:id  ///   Patch update of task and isTaskCompleted boolean
postsController.patch('/:_id', (req, res) => {
  postsORM.update(req, res);
});

module.exports = postsController;
