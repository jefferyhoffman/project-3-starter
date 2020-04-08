const router = require("express").Router();
// const forumController = require("../");

router
    .route("/")
    .get(forumController.findAll)
    .post(forumController.create);

router
    .route("/:id")
    .get(forumController.findById)
    .put(forumController.update)
    .delete(forumController.remove);

module.exports = router;
