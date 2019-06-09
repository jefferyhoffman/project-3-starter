const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/items', require ('./itemsController'));

module.exports = apiControllers;
