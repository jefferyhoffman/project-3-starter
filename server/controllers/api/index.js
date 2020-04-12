const router = require("express").Router();
const threadRoutes = require("./thread");
const replyRoutes = require("./post");



//Thread routes
router.use("/thread", threadRoutes);
router.use("/reply", replyRoutes);

// const router = require("express").Router();
// // const apiControllers = require('express').Router();
// const threadRoutes = require("./thread");
// const replyRoutes = require("./post");

// const apiControllers = require("./usersController");
// const secretsController = require('./secretsController');

router.use('/users', require('./usersController'));
router.use('/secrets', require('./secretsController'));
router.use("/thread", require("./usersController"));


module.exports = router;