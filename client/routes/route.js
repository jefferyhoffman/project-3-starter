const router = require("express").Router();
const drinksController = require("../../controllers/drinkscontroller.js");

  router.route("/")
  .get(drinksController.findAll)
  .post(drinksController.create);


  router
  .route("/:id")
  .get(drinksController.findById)
  .put(drinksController.update)
  .delete(drinksController.remove);

  module.exports = router;