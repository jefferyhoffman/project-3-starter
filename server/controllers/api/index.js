const router = require("express").Router();
const apiControllers = require('express').Router();
const threadRoutes = require("./thread");
const replyRoutes = require("./post");

//Thread routes
router.use("/thread", threadRoutes);

//Post routes
router.use("/reply", replyRoutes);


apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));

module.exports = apiControllers;
module.exports = router;
