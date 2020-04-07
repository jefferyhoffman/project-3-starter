const apiControllers = require("express").Router();

apiControllers.use("/actions", require("./actionsController"));
apiControllers.use("/challenges", require("./challengesController"));
apiControllers.use("/users", require("./usersController"));
apiControllers.use("/secrets", require("./secretsController"));

module.exports = apiControllers;
