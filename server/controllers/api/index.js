const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'))
apiControllers.use('/products', require('./productsController'));

module.exports = apiControllers;
