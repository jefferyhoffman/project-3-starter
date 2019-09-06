const router = require('express').Router();
const profilesController = require('./profilesController');

// Matches with "/api/profiles"
router
  .route('/')
  .get(profilesController.findAll)
  .post(profilesController.create);

// Matches with "/api/profiles/:id"
router
  .route('/:id')
  .get(profilesController.findById)
  .put(profilesController.update)
  .delete(profilesController.remove);

module.exports = router;
