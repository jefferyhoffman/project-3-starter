const apiControllers = require("express").Router();

apiControllers.use("/users", require("./usersController"));
apiControllers.use("/recipes", require("./recipesController"));
apiControllers.use("/reviews", require("./reviewsController"));

module.exports = apiControllers;
