const controllers = require("express").Router();

module.exports = controllers => {
    const apiControllers = require("./api");

    controllers.use("/api", apiControllers);
}