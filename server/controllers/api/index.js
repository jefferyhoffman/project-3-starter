const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/krystal', require('./krystalControllers'));
apiControllers.use('/customer', require('./customerController'));

module.exports = apiControllers;
