const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/books', require('./booksController'));
apiControllers.use('/bookUsers', require('./bookUsersController'))


module.exports = apiControllers;
