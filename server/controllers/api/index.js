const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/properties', require('./propertiesController'));
apiControllers.use('/contact', require('./email'));
module.exports = apiControllers;
