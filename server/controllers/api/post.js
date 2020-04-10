const router = require("express").Router();
const postController = require("../api/postController");

router
    .route("/")
    .get(postController.findById)
    .post(postController.create);

router
    .route("/:id")
    .get(postController.findById)
    .put(postController.update)
    .delete(postController.remove);

module.exports = router;