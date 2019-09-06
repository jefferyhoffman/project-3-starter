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

/// Route /api/posts/post  ///   Create a new post
postsController.post('/post', (req, res) => {
  // const { email, password } = req.body;
  // db.posts.create({ email, password })
  //   .then(user => res.json(user))
  //   .catch(err => res.json(err));
});

module.exports = postsController;
