const router = require('express').Router();
const postsController = require('./postsController');

// Matches with "/api/posts"
router
  .route('/')
  .get(postsController.findAll)
  .post(postsController.create);

// Matches with "/api/posts/:id"
router
  .route('/:id')
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

module.exports = router;
