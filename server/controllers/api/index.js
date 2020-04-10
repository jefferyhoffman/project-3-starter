const router = require("express").Router();
router.use('/thread', require('./thread'));
router.use('/reply', require('./post'));
router.use('/users', require('./usersController'));
router.use('/secrets', require('./secretsController'));

module.exports = router;

// const router = require("express").Router();
// // const apiControllers = require('express').Router();
// const threadRoutes = require("./thread");
// const replyRoutes = require("./post");

// const apiControllers = require("./usersController");
// const secretsController = require('./secretsController');

// //Thread routes
// router.use("/thread", threadRoutes);

// //Post routes
// router.use("/reply", replyRoutes);

// apiControllers.use('/users', require('./usersController'));
// apiControllers.use('/secrets', require('./secretsController'));

// router.use("/users", apiControllers);
// router.use('/secrets', secretsController);

// // module.exports = apiControllers;
// module.exports = router;
