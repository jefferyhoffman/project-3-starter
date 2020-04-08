const router = require("express").Router();
const apiControllers = require('express').Router();


//Thread routes
router.use("/thread", threadRoutes);


apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));

module.exports = apiControllers;
module.exports = router;
