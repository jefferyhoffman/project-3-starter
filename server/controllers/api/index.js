const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/blogs', require('./blogsController'));
module.exports = apiControllers;
