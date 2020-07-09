const apiControllers = require("express").Router();

apiControllers.use("/users", require("./usersController"));
apiControllers.use("/recipes", require("./recipesController"));

module.exports = apiControllers;
