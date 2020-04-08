const router = require("express").Router();
// const threadController = require("../");


//Gets forums that are present on homepage
router
    .route("/")
    .get(threadController.findAll)
    .post(threadController.create);


router
    .route("/:id")
    .get(threadController.findById)
    .put(threadController.update)
    .delete(threadController.remove);

module.exports = router;
