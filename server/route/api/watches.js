const router = require("express").Router();
const watchesController = require("../server/controllers/watchesController.js")

// Matches with "/api/watches"
router.route("/")
  .get(watchesController.findAll)
  .post(watchesController.create);

// Matches with "/api/watches/:id"
router
  .route("/:id")
  .get(watchesController.findById)
  .put(watchesController.update)
  .delete(watchesController.remove);

module.exports = router;
