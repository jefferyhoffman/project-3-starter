const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/stripe', require('./stripeController'));

apiControllers.use('/orders', require('./ordersController'));
module.exports = apiControllers;
