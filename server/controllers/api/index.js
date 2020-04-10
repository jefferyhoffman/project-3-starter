const router = require("express").Router();
const threadRoutes = require("./thread");
const replyRoutes = require("./post");



//Thread routes
router.use("/thread", threadRoutes);

//Post routes
router.use("/reply", replyRoutes);



router.use('/users', require('./usersController'));
router.use('/secrets', require('./secretsController'));


module.exports = router;