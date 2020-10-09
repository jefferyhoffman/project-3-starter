const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/products', require('./api-product-routes'));
apiControllers.use('/orders', require('./api-order-routes'));

module.exports = apiControllers;
