const apiControllers = require("express").Router();

module.exports = apiControllers => {
    apiControllers.use("/users", require("./usersController"));
    apiControllers.use("/secrets", require("./secretsController"));    
}
