const apiControllers = require("express").Router();

apiControllers.use("/users", require("./usersController"));
apiControllers.use("/recipes", require("./recipesController"));
apiControllers.use("/reviews", require("./reviewsController"));
apiControllers.use("/ingredients", require("./ingredientsController"));
apiControllers.use("/categories", require("./categoriesController"));

module.exports = apiControllers;
