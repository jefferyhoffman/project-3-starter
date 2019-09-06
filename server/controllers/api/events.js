const router = require('express').Router();
const eventsController = require('./eventsController');

// Matches with "/api/events"
router
  .route('/')
  .get(eventsController.findAll)
  .post(eventsController.create);

// Matches with "/api/events/:id"
router
  .route('/:_id')
  .get(eventsController.findById)
  .patch(eventsController.patch)
  .delete(eventsController.remove);

module.exports = router;
